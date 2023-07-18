"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type ControlPoint = [x: number, y: number];
export type ControlPoints = [
  topLeft: ControlPoint,
  topRight: ControlPoint,
  bottomRight: ControlPoint,
  bottomLeft: ControlPoint
];

export function ControlPointDot({
  point,
  onChange,
}: {
  point: ControlPoint;
  onChange: (point: ControlPoint, isDragging: boolean) => void;
}) {
  const dotSize = 12;
  const borderSize = 2;

  const [isDragging, setIsDragging] = useState(false);
  const dotElRef = useRef<HTMLDivElement>(null);

  const onDrag = useCallback(
    (e: MouseEvent | TouchEvent) => {
      const ev = e as MouseEvent & TouchEvent;
      const dotEl = dotElRef.current;
      if (!isDragging || !dotEl) return;
      ev.stopPropagation();
      const parentBounds = dotEl.parentElement?.getBoundingClientRect();

      const x = ev.clientX ?? ev.touches?.[0].clientX ?? 0;
      const y = ev.clientY ?? ev.touches?.[0].clientY ?? 0;
      if (!parentBounds || (x === 0 && y === 0)) return;

      const newPoint = [
        x - parentBounds.left,
        y - parentBounds.top,
      ] as ControlPoint;
      onChange(newPoint, true);
    },
    [isDragging, onChange]
  );

  useEffect(() => {
    document.addEventListener("mousemove", onDrag);
    document.addEventListener("touchmove", onDrag);

    return () => {
      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("touchmove", onDrag);
    };
  }, [onDrag]);

  return (
    <div
      ref={dotElRef}
      onMouseDown={(e) => {
        setIsDragging(true);
        onChange(point, true);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        onChange(point, true);
      }}
      onMouseUp={(e) => {
        setIsDragging(false);
        onChange(point, false);
      }}
      onTouchEnd={(e) => {
        setIsDragging(false);
        onChange(point, false);
      }}
      onTouchCancel={(e) => {
        setIsDragging(false);
        onChange(point, false);
      }}
      style={{
        width: dotSize,
        height: dotSize,
        backgroundColor: "white",
        position: "absolute",
        left: point[0],
        top: point[1],
        borderRadius: "50%",
        border: `${borderSize}px solid blue`,
        marginLeft: -dotSize / 2,
        marginTop: -dotSize / 2,
        cursor: "pointer",
      }}
    ></div>
  );
}

export function ControlPointsDots({
  controlPoints,
  onChange,
}: {
  controlPoints: ControlPoints;
  onChange: (controlPoints: ControlPoints, controlPointIndex: number) => void;
}) {
  return (
    <>
      <ControlPointDot
        point={controlPoints[0]}
        onChange={(controlPoint, isDragging) => {
          if (!isDragging) {
            onChange(controlPoints, -1);
            return;
          }
          const newControlPoints = controlPoints.slice() as ControlPoints;
          newControlPoints.splice(0, 1, controlPoint);
          onChange(newControlPoints, 0);
        }}
      />
      <ControlPointDot
        point={controlPoints[1]}
        onChange={(controlPoint, isDragging) => {
          if (!isDragging) {
            onChange(controlPoints, -1);
            return;
          }
          const newControlPoints = controlPoints.slice() as ControlPoints;
          newControlPoints.splice(1, 1, controlPoint);
          onChange(newControlPoints, 1);
        }}
      />
      <ControlPointDot
        point={controlPoints[2]}
        onChange={(controlPoint, isDragging) => {
          if (!isDragging) {
            onChange(controlPoints, -1);
            return;
          }
          const newControlPoints = controlPoints.slice() as ControlPoints;
          newControlPoints.splice(2, 1, controlPoint);
          onChange(newControlPoints, 2);
        }}
      />
      <ControlPointDot
        point={controlPoints[3]}
        onChange={(controlPoint, isDragging) => {
          if (!isDragging) {
            onChange(controlPoints, -1);
            return;
          }
          const newControlPoints = controlPoints.slice() as ControlPoints;
          newControlPoints.splice(3, 1, controlPoint);
          onChange(newControlPoints, 3);
        }}
      />
    </>
  );
}
