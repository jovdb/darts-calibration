/* eslint-disable @next/next/no-img-element */
"use client";

import Config, { sampleImages } from "@/components/config";
import { DartsOverlay } from "@/components/darts-overlay";
import { useState } from "react";

export default function Home() {
  const viewWidth = 500;

  const [imageUrl, setImageUrl] = useState(sampleImages[0]);
  const [color, setColor] = useState("Yellow");
  const [showNumbers, setShowNumbers] = useState(false);

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
          style={{ userSelect: "none" }}
          draggable={false}
        />
        <DartsOverlay
          width="400"
          style={{
            top: 0,
            left: 0,
            position: "absolute",
            pointerEvents: "none",
            transformOrigin: "0 0",
          }}
          hideNumbers={!showNumbers}
          color={color}
        />
      </div>
    </main>
  );
}
