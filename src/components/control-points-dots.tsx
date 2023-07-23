"use client";

import { dot } from "node:test/reporters";
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
  title,
  color,
  onChange,
}: {
  point: ControlPoint;
  color: string;
  title: string;
  onChange: (point: ControlPoint, isDragging: boolean) => void;
}) {
  const dotSize = 14;
  const borderSize = 3;

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
      style={{
        width: 0,
        height: 0,
        //backgroundColor: "white",
        position: "absolute",
        left: point[0],
        top: point[1],
        color,
      }}
    >
      <svg
        width={dotSize + borderSize}
        height={dotSize + borderSize}
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
          position: "absolute",
          transform: `translate(${(dotSize + borderSize) / -2}px, ${
            (dotSize + borderSize) / -2
          }px)`,
          cursor: "pointer",
        }}
      >
        <circle
          cx={dotSize / 2 + borderSize / 2}
          cy={dotSize / 2 + borderSize / 2}
          r={dotSize / 2}
          stroke={color}
          strokeWidth={borderSize}
          fill="transparent"
        />
      </svg>
      <div
        style={{
          transform: `translate(-50%, -${dotSize + 14}px)`,
          padding: 2,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          fontFamily: "Arial",
          fontSize: 10,
          textAlign: "center",
          whiteSpace: "nowrap",
          position: "absolute",
        }}
      >
        {title}
      </div>
    </div>
  );
}

export function ControlPointsDots({
  controlPoints,
  onChange,
  color,
}: {
  controlPoints: ControlPoints;
  onChange: (controlPoints: ControlPoints, controlPointIndex: number) => void;
  color: string;
}) {
  return (
    <>
      <ControlPointDot
        point={controlPoints[0]}
        title="5 - 20"
        color={color}
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
        title="13 - 6"
        color={color}
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
        title="3 - 17"
        color={color}
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
        title="11 - 8"
        color={color}
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
