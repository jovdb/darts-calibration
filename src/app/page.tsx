/* eslint-disable @next/next/no-img-element */
"use client";

import {
  DartsOverlay,
  unitControlPointsToOverlay,
} from "@/components/darts-overlay";
import Config, { sampleImages } from "@/components/config";
import { ControlPointsDots } from "@/components/control-points-dots";
import { useControlPoints } from "@/hooks/use-control-points";
import { useState } from "react";

export default function Home() {
  const viewWidth = 500;

  const [imageUrl, setImageUrl] = useState(sampleImages[0]);
  const [color, setColor] = useState("Yellow");
  const [showNumbers, setShowNumbers] = useState(false);
  const {
    controlPoints,
    setControlPoints,
    imageToCircleMatrix,
    resetControlPoints,
  } = useControlPoints(viewWidth, viewWidth, unitControlPointsToOverlay);
  const [, setControlPointDragging] = useState(-1);

  return (
    <main>
      <h1>
        <strong>Calibration Page</strong>
      </h1>
      <div style={{ display: "flex" }}>
        <Config
          imageUrl={imageUrl}
          onImageUrlChange={setImageUrl}
          color={color}
          onColorChange={setColor}
          showNumbers={showNumbers}
          onShowNumbersChange={setShowNumbers}
          resetControlPoints={resetControlPoints}
          style={{
            width: 470,
            display: "inline-block",
            marginBottom: "1rem",
          }}
        />
      </div>
      <div
        style={{
          width: viewWidth,
          backgroundColor: "#f8f8f8",
          border: "1px solid #bbb",
          position: "relative",
          overflow: "hidden",
          display: "inline-block",
          marginRight: "1rem",
        }}
      >
        <img
          alt="Photo of webcam"
          src={imageUrl}
          width={viewWidth}
          height="auto"
          style={{
            userSelect: "none",
          }}
          draggable={false}
        />
        <DartsOverlay
          width={viewWidth.toString()}
          style={{
            top: 0,
            left: 0,
            position: "absolute",
            pointerEvents: "none",
            transform: imageToCircleMatrix?.inverse()?.toCssString(),
            transformOrigin: "0 0",
          }}
          hideNumbers={!showNumbers}
          color={color}
        />

        <ControlPointsDots
          controlPoints={controlPoints}
          onChange={(newControlPoints, controlPointIndex) => {
            if (controlPointIndex >= 0) setControlPoints(newControlPoints);
            setControlPointDragging(controlPointIndex);
          }}
          color={color}
        />
      </div>
      <div
        style={{
          display: "inline-block",
          verticalAlign: "top",
        }}
      >
        <div
          style={{
            width: viewWidth,
            height: viewWidth,
            backgroundColor: "#f8f8f8",
            border: "1px solid #bbb",
            position: "relative",
            overflow: "hidden",
            display: "inline-block",
            borderRadius: "50%",
          }}
        >
          <img
            src={imageUrl}
            width={viewWidth}
            height="auto"
            alt=""
            style={{
              position: "absolute",
              userSelect: "none",
              // userDrag: "none",
              transform: imageToCircleMatrix?.toCssString(),
              transformOrigin: "0 0",
            }}
            draggable={false}
          />
          <DartsOverlay
            width={viewWidth.toString()}
            style={{
              position: "absolute",
              pointerEvents: "none",
            }}
            hideNumbers
            color={color}
          />
        </div>
      </div>
    </main>
  );
}
