/* eslint-disable @next/next/no-img-element */
"use client";

import { DartsOverlay } from "@/components/darts-overlay";
import { useState } from "react";

const sampleImages = [
  "./sample1.jpg",
  "./sample2.jpg",
  "./sample3.jpg",
  "./sample4.jpg",
  "./sample5.jpg",
];

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
        <fieldset
          style={{
            width: 470,
            display: "inline-block",
            marginBottom: "1rem",
          }}
        >
          <table>
            <tbody>
              <tr>
                <td>Sample Image: </td>
                <td>
                  <select
                    style={{ width: 180 }}
                    onChange={(e) => {
                      setImageUrl(e.target.value);
                    }}
                    value={imageUrl}
                  >
                    {sampleImages.map((url) => (
                      <option key={url} value={url}>
                        {url}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Overlay Color:</td>
                <td>
                  <select
                    onChange={(e) => {
                      setColor(e.target.value);
                    }}
                    value={color}
                  >
                    {[
                      "Red",
                      "Blue",
                      "Green",
                      "Yellow",
                      "Magenta",
                      "White",
                      "Black",
                      "Transparent",
                    ].map((colorItem) => (
                      <option key={colorItem} value={colorItem}>
                        {colorItem}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="numbers">Show numbers</label>
                </td>
                <td>
                  <input
                    id="numbers"
                    type="checkbox"
                    checked={showNumbers}
                    onChange={(e) => {
                      setShowNumbers((e.target as HTMLInputElement).checked);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <button
                    style={{ marginTop: "0.5rem" }}
                    onClick={() => {
                      // resetControlPoints();
                    }}
                  >
                    Reset
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
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
