import type { ControlPoint, ControlPoints } from "@/components/control-points-dots";
import { Matrix } from "@/math/matrix";
import { getProjectionMatrix } from "@/math/plane-perspective";
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
    unitControlPointsToOverlay: Matrix,
) {
    const controlPointsOnImageMatrix = unitControlPointsToOverlay
        ? new Matrix()
            .scale(dartOverlaySize) // scale back from unit to dart size
            .multiply(unitControlPointsToOverlay)
            .scale(1 / dartOverlaySize) // Convert to unit
        : undefined;

    // Matrix to move control points from corner to initial start position
    const initialControlPointsMatrix = new Matrix()
        // unit to image size
        .scale(imageSize)
        .translate(0.5, 0.3)
        .scale(0.3)
        .rotate(36)
        .translate(-0.5, -0.5)
    // .multiply(unitControlPointsToOverlay)

    const initialControlPoints = initialControlPointsMatrix
        ? unitControlPoints.map((point) => {
            const p = initialControlPointsMatrix.transformPoint({
                x: point[0],
                y: point[1],
            });
            return [p.x, p.y] as ControlPoint;
        }) as ControlPoints
        : unitControlPoints;

    function resetControlPoints() {
        setControlPoints(initialControlPoints);
    }

    const [controlPoints, setControlPoints] = useState(initialControlPoints);

    const imageToCircleMatrix = useMemo(() => {
        const newControlPoints = controlPoints.map((point) => {
            const p = new Matrix().transformPoint({ x: point[0], y: point[1] });
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
        );
        return projectionMatrix.multiply(controlPointsOnImageMatrix?.inverse()).inverse();
    }, [controlPoints, controlPointsOnImageMatrix, dartOverlaySize]);

    return {
        controlPoints,
        setControlPoints,
        resetControlPoints,
        /** Matrix the image with the perspective dartboard to a perfect circle dartboard image */
        imageToCircleMatrix,
    };
}
