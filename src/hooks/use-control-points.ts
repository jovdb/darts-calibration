import type { ControlPoint, ControlPoints } from "@/components/control-points-dots";
import { getProjectionMatrix } from "@/plane-perspective";
import { useMemo, useState } from "react";

const unitControlPoints = [
    [0, 0],
    [1, 0],
    [1, 1],
    [0, 1],
] as ControlPoints;

export function useControlPoints(
    dartOverlaySize: number,
    imageSize: number,
    unitControlPointsToOverlay: DOMMatrix
) {
    const initialControlPointsScale = 0.3;
    const scaleDartsOverlayToDoubleRing = 0.531;

    const controlPointsOnImageMatrix = new DOMMatrix()
        .scale(dartOverlaySize) // scale back from unit to dart size
        .multiply(unitControlPointsToOverlay)
        .scale(1 / dartOverlaySize); // Convert to unit

    // Matrix to move control points from corner to initial start position
    const initialControlPointsMatrix = new DOMMatrix()
        // unit to image size
        .scale(imageSize)
        .translate(0.5, 0.2)
        .scale(0.6)
        .translate(-0.5, -0.2)
        .multiply(unitControlPointsToOverlay)

    const initialControlPoints = unitControlPoints.map((point) => {
        const p = initialControlPointsMatrix.transformPoint({
            x: point[0],
            y: point[1],
        });
        return [p.x, p.y] as ControlPoint;
    }) as ControlPoints;

    function resetControlPoints() {
        setControlPoints(initialControlPoints);
    }

    const [controlPoints, setControlPoints] = useState(initialControlPoints);

    const overlayMatrix = useMemo(() => {
        const newControlPoints = controlPoints.map((point) => {
            const p = new DOMMatrix().transformPoint({
                x: point[0],
                y: point[1],
            });
            return [p.x, p.y] as ControlPoint;
        }) as ControlPoints;

        const projectionMatrix = getProjectionMatrix(
            [
                [0, 0],
                [dartOverlaySize, 0],
                [dartOverlaySize, dartOverlaySize],
                [0, dartOverlaySize],
            ],
            newControlPoints
        ).domMatrix;

        return projectionMatrix.multiply(controlPointsOnImageMatrix.inverse());
    }, [controlPoints, controlPointsOnImageMatrix, dartOverlaySize]);

    const overlayMatrix3d = useMemo(() => overlayMatrix.toString(), [overlayMatrix]);

    const imageMatrix3d = useMemo(() => overlayMatrix.inverse().toString(), [overlayMatrix]);

    return {
        controlPoints,
        setControlPoints,
        resetControlPoints,
        overlayMatrix3d,
        imageMatrix3d,
    };
}
