"use client";
import styles from "./darts-overlay.module.css";
import { CSSProperties } from "react";

export const normalizedControlPoints =
  typeof DOMMatrix !== "undefined"
    ? [
        [0, 0],
        [1, 0],
        [1, 1],
        [0, 1],
      ].map((point) => {
        const m = new DOMMatrix()
          // unit to image size
          .translate(0.5, 0.5)
          .scale(0.531)
          .rotate(36)
          .translate(-0.5, -0.5);
        const { x, y } = m.transformPoint({ x: point[0], y: point[1] });
        return [x, y];
      })
    : [];

export function DartsOverlay({
  width,
  hideNumbers,
  hideSpokes,
  showBasicRings,
  color = "black",
  style,
}: {
  width: string;
  hideNumbers?: boolean;
  hideSpokes?: boolean;
  showBasicRings?: boolean;
  color?: string;
  style?: CSSProperties;
}) {
  const strokeWidth = 2;
  const strokeColor = color;

  return (
    <svg
      version="1.1"
      x="0px"
      y="0px"
      width={width ?? 400}
      viewBox="0 0 581.83563 581.83685"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        ...style,
        "--stroke-color": strokeColor,
        "--stroke-width": strokeWidth,
        "--numbers": !hideNumbers ? "" : "none",
        "--spokes": !hideSpokes ? "" : "none",
      }}
    >
      <g transform="translate(-225.56939,-94.108216)">
        <g id="numbers">
          <path
            className={styles["darts-overlay__numbers"]}
            d="M 799.37,385.03 C 799.42,289.67 751.06,200.31 671.2,148.19 601.59,102.65 514.81,90.1 435.16,114.06 357.13,137.41 292.54,193.83 258.9,268.01 c -33.74,74.13 -33.74,159.89 0,234.02 34.35,75.76 100.89,132.86 180.98,155.33 78.39,22.11 163.16,9.1 231.32,-35.5 79.86,-52.12 128.22,-141.47 128.17,-236.83 z"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 496.56,111.21 c 0.04,-1.39 0.2,-2.81 0.73,-4.1 0.54,-1.34 1.49,-2.47 2.6,-3.37 1.52,-1.22 3.34,-2.17 5.28,-2.45 0.81,-0.12 1.71,-0.07 2.43,0.2 1.91,0.73 3.04,2.54 3.65,4.37 0.55,1.68 0.64,3.58 -0.11,5.21 -0.44,0.99 -1.11,1.85 -1.85,2.63 -0.89,0.97 -3.09,2.81 -4.09,3.71 -1.14,1.02 -2.27,2.12 -3.24,3.3 -1.35,1.64 -2.41,3.54 -3.06,5.57 -0.38,1.24 -0.69,2.67 -0.39,3.93 0.05,0.18 0.1,0.33 0.16,0.45 0.03,0.07 0.04,0.09 0.04,0.09 0.04,0.07 0.05,0.09 0.05,0.09 0.04,0.06 0.05,0.08 0.05,0.08 0.04,0.06 0.05,0.08 0.05,0.08 0.04,0.06 0.06,0.08 0.06,0.08 0.05,0.05 0.06,0.07 0.06,0.07 0.07,0.07 0.08,0.09 0.08,0.09 0.07,0.06 0.09,0.08 0.09,0.08 0.06,0.04 0.07,0.06 0.07,0.06 0.06,0.04 0.08,0.06 0.08,0.06 0.06,0.04 0.08,0.05 0.08,0.05 0.06,0.04 0.08,0.05 0.08,0.05 0.07,0.03 0.09,0.04 0.09,0.04 0.88,0.38 1.8,0.29 2.7,0.19 1.92,-0.25 4.24,-0.94 6.15,-1.23 2.34,-0.4 5.18,-0.27 7.55,-0.38"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 535.17,121.62 c 0.24,-2.79 0.29,-5.66 0.09,-8.45 -0.15,-1.98 -0.43,-3.99 -0.96,-5.9 -0.2,-0.69 -0.43,-1.41 -0.71,-2.08 -0.64,-1.53 -1.54,-3.03 -2.91,-4.02 -2.72,-1.97 -5.89,-0.98 -8.03,1.28 -2.82,2.96 -3.53,7.22 -3.67,11.16 -0.08,2.55 0.08,5.13 0.47,7.65 0.34,2.1 0.84,4.2 1.74,6.13 0.64,1.36 1.55,2.67 2.85,3.45 0.96,0.59 2.09,0.86 3.21,0.93 1.91,0.14 4.06,-0.29 5.4,-1.73 0.81,-0.86 1.25,-1.9 1.59,-2.99 0.54,-1.75 0.76,-3.61 0.93,-5.43 z"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 283.39,540.74 c -0.74,1.15 -1.45,2.36 -1.91,3.66 -0.24,0.68 -0.42,1.46 -0.38,2.15 0.02,0.63 0.23,1.25 0.53,1.74 0.03,0.05 0.04,0.07 0.04,0.07 0.04,0.07 0.06,0.09 0.06,0.09 0.05,0.06 0.06,0.09 0.06,0.09 0.05,0.06 0.07,0.08 0.07,0.08 0.05,0.06 0.07,0.07 0.07,0.07 0.05,0.05 0.07,0.07 0.07,0.07 0.07,0.06 0.08,0.06 0.08,0.06 0.07,0.05 0.08,0.06 0.08,0.06 0.06,0.04 0.07,0.05 0.07,0.05 0.07,0.04 0.08,0.04 0.08,0.04 0.07,0.03 0.08,0.04 0.08,0.04 0.06,0.02 0.07,0.03 0.07,0.03 0.06,0.02 0.08,0.02 0.08,0.02 0.07,0.02 0.08,0.02 0.08,0.02 0.07,0.01 0.08,0.02 0.08,0.02 0.04,0.01 0.07,0.01 0.07,0.01 0.06,0.01 0.09,0.01 0.09,0.01 0.06,0 0.09,0 0.09,0 0.06,0 0.1,0 0.1,0 0.07,0 0.1,0 0.1,0 0.51,-0.04 0.91,-0.17 1.37,-0.33 0.53,-0.2 1.07,-0.45 1.58,-0.71 6.52,-3.54 18.76,-12.64 25.05,-16.89"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 357.6,161.16 c -1.62,-2.6 -2.76,-5.79 -1.92,-8.85 0.38,-1.41 1.12,-2.65 2.13,-3.68 1.47,-1.51 3.63,-2.39 5.74,-2.15 1.01,0.11 1.99,0.48 2.81,1.07 0.88,0.64 1.53,1.47 1.97,2.45 0.46,1.03 0.67,2.15 0.74,3.27 0.17,2.54 -0.41,5.08 -1.03,7.53 -0.84,3.24 -1.89,6.85 -2.08,10.2 -0.04,0.91 -0.03,1.84 0.19,2.72 0.16,0.62 0.47,1.24 0.87,1.67 0.48,0.52 1.09,0.8 1.71,0.94 1.98,0.41 3.85,-0.64 5.21,-1.92 1.34,-1.26 2.77,-2.95 4.19,-4.12 1.49,-1.25 3.13,-2.35 4.9,-3.16"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 675.04,597.97 c -1.55,-2.01 -2.82,-4.39 -2.93,-6.98 -0.09,-1.98 0.59,-3.97 1.82,-5.51 1.46,-1.86 3.88,-3.01 6.26,-2.69 0,0 0.09,0.01 0.09,0.01 1.57,0.22 3.03,1.14 3.93,2.43 0.7,0.99 1.1,2.15 1.34,3.33 0.44,2.24 0.28,4.56 -0.02,6.81 -0.54,4.1 -1.54,8.5 -1.05,12.63 0.1,0.7 0.28,1.45 0.61,2.07 0.29,0.56 0.7,1 1.17,1.3 0.53,0.34 1.12,0.47 1.68,0.5 1.86,0.07 3.46,-1.05 4.61,-2.34 1.21,-1.36 2.44,-3.2 3.7,-4.51 1.39,-1.46 2.95,-2.78 4.69,-3.81"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 436.04,113.8 c -2.9,0.12 -5.96,0.26 -8.81,0.77 -0.7,0.13 -1.41,0.29 -2.08,0.52 -0.51,0.17 -1.11,0.43 -1.5,0.75 -0.07,0.06 -0.09,0.08 -0.09,0.08 -0.06,0.06 -0.08,0.08 -0.08,0.08 -0.06,0.06 -0.08,0.08 -0.08,0.08 -0.06,0.06 -0.07,0.08 -0.07,0.08 -0.05,0.06 -0.07,0.09 -0.07,0.09 -0.05,0.07 -0.07,0.09 -0.07,0.09 -0.53,0.79 -0.58,1.68 -0.71,2.56 -0.14,1.14 -0.21,2.32 -0.19,3.47 0.03,1.24 0.14,2.53 0.65,3.67 0.52,1.17 1.42,2 2.41,2.67 2.53,1.69 5.69,2.93 8.32,4.46 1.09,0.64 2.16,1.35 3.04,2.26 1.05,1.07 1.73,2.48 1.92,3.97 0.21,1.66 -0.14,3.42 -1.1,4.79 -0.8,1.14 -1.99,1.89 -3.3,2.26 -1.66,0.47 -3.32,0.3 -4.95,-0.16 -2.04,-0.58 -3.95,-1.59 -5.75,-2.71"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 689.43,171.29 c -0.01,0.39 -0.02,1.17 -0.02,1.56 0,4.08 0.29,10.18 -0.12,14.18 -0.17,1.35 -0.41,2.85 -1.25,3.94 -0.06,0.07 -0.08,0.1 -0.08,0.1 -0.06,0.07 -0.09,0.1 -0.09,0.1 -0.06,0.06 -0.09,0.09 -0.09,0.09 -0.06,0.06 -0.09,0.09 -0.09,0.09 -0.06,0.06 -0.09,0.08 -0.09,0.08 -0.06,0.05 -0.1,0.08 -0.1,0.08 -0.07,0.05 -0.1,0.08 -0.1,0.08 -1,0.71 -2.2,0.88 -3.38,0.83 -1.94,-0.1 -3.8,-0.97 -5.18,-2.33 -2.49,-2.44 -4.47,-6.98 -1.84,-9.97 0.95,-1.07 2.17,-1.68 3.48,-2.12 1.57,-0.53 3.24,-0.82 4.88,-1.07 4.22,-0.65 9.41,-0.83 13.44,-2.3 1.36,-0.51 2.7,-1.17 3.79,-2.13 0.73,-0.65 1.35,-1.52 1.41,-2.48 0.06,-1 -0.34,-1.87 -0.85,-2.67 -0.61,-0.94 -1.4,-1.76 -2.26,-2.47 -1.63,-1.34 -3.74,-2.42 -5.9,-2.09 -0.98,0.14 -2,0.62 -2.78,1.19 -0.78,0.58 -1.46,1.27 -1.89,2.06 -0.33,0.63 -0.5,1.27 -0.62,1.96 -0.19,1.07 -0.24,2.2 -0.27,3.29 z"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 724.87,243.85 c 6.91,-5.65 14.46,-11.57 20.73,-17.9 1.07,-1.12 2.14,-2.3 3,-3.59 0.54,-0.81 1.07,-1.77 1.14,-2.74 0,-0.07 0,-0.1 0,-0.1 0,-0.07 0,-0.1 0,-0.1 0,-0.07 0,-0.1 0,-0.1 0,-0.06 -0.01,-0.09 -0.01,-0.09 -0.01,-0.06 -0.01,-0.09 -0.01,-0.09 -0.01,-0.06 -0.01,-0.09 -0.01,-0.09 -0.01,-0.06 -0.02,-0.09 -0.02,-0.09 -0.09,-0.41 -0.26,-0.75 -0.44,-1.08 -0.03,-0.06 -0.05,-0.07 -0.05,-0.07 -0.04,-0.05 -0.05,-0.07 -0.05,-0.07 -0.05,-0.07 -0.06,-0.09 -0.06,-0.09 -0.05,-0.07 -0.07,-0.08 -0.07,-0.08 -0.06,-0.06 -0.07,-0.08 -0.07,-0.08 -0.06,-0.06 -0.08,-0.07 -0.08,-0.07 -0.05,-0.04 -0.07,-0.06 -0.07,-0.06 -0.06,-0.04 -0.08,-0.05 -0.08,-0.05 -0.06,-0.04 -0.08,-0.05 -0.08,-0.05 -0.06,-0.04 -0.09,-0.05 -0.09,-0.05 -0.07,-0.03 -0.09,-0.04 -0.09,-0.04 -0.05,-0.02 -0.07,-0.03 -0.07,-0.03 -0.05,-0.02 -0.08,-0.03 -0.08,-0.03 -0.85,-0.26 -1.7,-0.2 -2.57,-0.17 -2.1,0.14 -4.26,0.48 -6.34,0.84 -3.87,0.72 -7.79,1.56 -11.45,3.04 -0.77,0.32 -1.56,0.69 -2.28,1.12 -0.55,0.32 -1.16,0.77 -1.56,1.24 -0.05,0.06 -0.08,0.1 -0.08,0.1 -0.05,0.06 -0.08,0.1 -0.08,0.1 -0.05,0.07 -0.07,0.1 -0.07,0.1 -0.04,0.07 -0.07,0.1 -0.07,0.1 -0.04,0.07 -0.06,0.1 -0.06,0.1 -0.04,0.07 -0.05,0.1 -0.05,0.1 -0.03,0.07 -0.05,0.1 -0.05,0.1 -0.03,0.07 -0.04,0.1 -0.04,0.1 -0.25,0.62 -0.18,1.29 -0.01,1.87 0.19,0.62 0.46,1.15 0.77,1.71 0.72,1.25 1.62,2.46 2.48,3.62 0,0 4.11,5.2 4.11,5.2"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 770.51,310.35 c -1.87,0.51 -3.73,1.2 -5.33,2.31 -1.12,0.78 -2.1,1.83 -2.61,3.11 -0.64,1.54 -0.51,3.29 -0.06,4.87 0.41,1.45 1.07,2.93 2.19,3.96 0.96,0.89 2.15,1.35 3.42,1.52 1.34,0.17 2.71,0 3.97,-0.47 1.66,-0.6 3,-1.83 4.15,-3.13 0.54,-0.6 1.39,-1.69 2.02,-2.17 0.06,-0.04 0.08,-0.06 0.08,-0.06 0.06,-0.04 0.07,-0.05 0.07,-0.05 0.06,-0.03 0.07,-0.05 0.07,-0.05 0.06,-0.03 0.07,-0.04 0.07,-0.04 0.06,-0.03 0.07,-0.04 0.07,-0.04 0.05,-0.02 0.07,-0.03 0.07,-0.03 0.05,-0.02 0.07,-0.03 0.07,-0.03 0.06,-0.02 0.07,-0.02 0.07,-0.02 0.06,-0.01 0.07,-0.02 0.07,-0.02 0.06,-0.01 0.07,-0.01 0.07,-0.01 0.06,-0.01 0.07,-0.01 0.07,-0.01 0.06,0 0.08,0 0.08,0 0.06,0 0.08,0 0.08,0 0.06,0 0.08,0.01 0.08,0.01 0.06,0.01 0.08,0.01 0.08,0.01 0.06,0.01 0.08,0.02 0.08,0.02 0.06,0.01 0.08,0.02 0.08,0.02 0.06,0.02 0.08,0.02 0.08,0.02 0.06,0.02 0.09,0.03 0.09,0.03 0.81,0.32 1.74,1.09 2.46,1.57 0.78,0.53 1.72,1.09 2.62,1.27 1.58,0.36 3.13,-0.19 4.49,-0.95 1.93,-1.09 3.81,-2.9 3.86,-5.22 0.04,-1.14 -0.3,-2.25 -0.78,-3.26 -0.45,-0.92 -1,-1.81 -1.67,-2.59 -2.63,-3.11 -6.76,-3.16 -10.45,-2.43"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 787.2,383.2 c -0.06,2.09 -0.19,4.24 -0.62,6.29 -0.26,1.22 -0.67,2.55 -1.42,3.55 -0.98,1.35 -2.62,1.91 -4.19,2.1 -1.2,0.13 -2.42,0.02 -3.58,-0.27 -1,-0.25 -1.98,-0.63 -2.86,-1.18 -1.01,-0.63 -1.82,-1.49 -2.31,-2.51 -0.74,-1.54 -0.86,-3.3 -0.7,-4.97 0.13,-1.37 0.57,-2.83 1.48,-3.88 1.15,-1.34 2.75,-2.03 4.39,-2.53 1.78,-0.53 3.66,-0.75 5.51,-0.83 2.71,-0.12 5.86,0.06 8.59,0.17 1.76,0.1 3.59,0.23 5.32,0.54 0.96,0.17 1.92,0.4 2.82,0.78 0.89,0.36 1.72,0.95 2.23,1.71 0.65,0.97 0.87,2.01 1.04,3.12 0.34,2.37 0.19,5.19 -1.64,6.93 -0.94,0.9 -2.06,1.42 -3.28,1.77 -1.58,0.43 -3.26,0.48 -4.88,0.21"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 779.96,472.47 c -4.73,-0.96 -9.42,-2.84 -13.14,-5.96 -1.21,-1.03 -2.3,-2.24 -3.11,-3.61 -0.77,-1.31 -1.33,-2.76 -1.51,-4.27 -0.15,-1.2 -0.02,-2.54 0.53,-3.6 0.79,-1.58 2.26,-2.63 3.91,-3.12 1.53,-0.45 3.17,-0.36 4.72,-0.09 2.15,0.4 4.27,1.11 6.34,1.82 2.73,0.98 5.47,2.08 8.02,3.46 1.71,0.95 3.4,2.08 4.62,3.64 0.71,0.92 1.23,2 1.43,3.15 0.21,1.18 0.1,2.4 -0.23,3.54 -0.53,1.89 -1.69,3.77 -3.45,4.71 -1.07,0.56 -2.22,0.75 -3.4,0.8 -1.58,0.06 -3.18,-0.16 -4.73,-0.47 z"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 734.93,513.75 c 0.01,2.3 0.03,4.79 -0.2,7.08 -0.12,1 -0.26,2.13 -0.78,2.99 -0.04,0.07 -0.07,0.1 -0.07,0.1 -0.04,0.07 -0.07,0.1 -0.07,0.1 -0.05,0.06 -0.07,0.09 -0.07,0.09 -0.38,0.46 -0.96,0.95 -1.37,1.36 -0.43,0.43 -0.86,0.89 -1.23,1.37 -0.47,0.6 -0.88,1.27 -1.13,1.99 -0.26,0.73 -0.33,1.48 -0.26,2.21 0.15,1.47 0.81,2.88 1.8,3.97 0.63,0.7 1.41,1.27 2.26,1.68 1.46,0.7 3.1,0.98 4.71,0.93 1.57,-0.05 3.13,-0.42 4.63,-0.85 1.96,-0.56 4.19,-1.37 6.22,-1.58 0.85,-0.09 1.72,-0.08 2.55,0.16 1.7,0.49 2.93,1.89 3.57,3.45 0.66,1.58 0.58,3.38 0.04,4.99 -0.36,1.08 -0.89,2.25 -1.78,2.96 -1.11,0.9 -2.42,1.3 -3.78,1.62 -2.22,0.5 -4.55,0.67 -6.82,0.78"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 515.18,650.81 c 0.17,-1.73 0.46,-3.48 1.03,-5.13 0.39,-1.12 0.97,-2.3 1.75,-3.19 1.62,-1.91 4.2,-2.69 6.61,-2.22 1.13,0.22 2.2,0.73 3.08,1.47 1.01,0.86 1.7,1.94 2.13,3.17 0.44,1.29 0.5,2.74 0.03,4.03 -0.35,0.99 -0.94,1.88 -1.59,2.7 -0.9,1.15 -2.23,2.48 -2.83,3.81 -0.35,0.78 -0.38,1.63 -0.17,2.38 0.28,0.95 0.76,1.66 1.33,2.42 1.05,1.37 2.25,2.79 2.56,4.54 0.18,0.92 0.17,1.87 0.01,2.8 -0.15,0.84 -0.44,1.7 -0.91,2.41 -0.74,1.12 -1.86,1.68 -3.1,1.96 -1.05,0.23 -2.2,0.32 -3.27,0.26 -0.99,-0.06 -1.93,-0.45 -2.67,-1 -1.1,-0.84 -1.84,-1.88 -2.55,-3.03 -1,-1.68 -1.78,-3.51 -2.46,-5.34"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 440.37,647.1 c -0.25,2.95 -0.56,6.02 -0.39,8.98 0.07,1.03 0.24,2.15 0.71,3.07 0.82,1.66 2.54,2.62 4.32,2.66 0.97,0.05 1.94,-0.25 2.69,-0.76 0.94,-0.65 1.56,-1.43 2.18,-2.33 0.99,-1.48 1.79,-3.12 2.51,-4.75 1.38,-3.13 2.41,-6.45 2.92,-9.83 0.32,-2.05 0.52,-4.16 0.44,-6.24 -0.07,-1.59 -0.33,-3.2 -0.97,-4.66 -0.5,-1.14 -1.25,-2.2 -2.25,-2.96 -0.95,-0.73 -2.11,-1.17 -3.3,-1.29 -1.18,-0.12 -2.42,0.06 -3.47,0.63 -0.99,0.54 -1.74,1.36 -2.31,2.27 -0.52,0.83 -0.9,1.75 -1.2,2.69 -0.36,1.15 -0.62,2.35 -0.76,3.55 -0.08,0.68 -0.13,1.38 -0.1,2.07 0.02,0.53 0.11,1.18 0.32,1.63 0.03,0.05 0.04,0.08 0.04,0.08 0.03,0.05 0.04,0.08 0.04,0.08 0.03,0.05 0.04,0.08 0.04,0.08 0.03,0.05 0.05,0.07 0.05,0.07 0.03,0.05 0.05,0.07 0.05,0.07 0.05,0.07 0.07,0.09 0.07,0.09 0.05,0.07 0.07,0.09 0.07,0.09 0.06,0.07 0.08,0.09 0.08,0.09 0.06,0.06 0.08,0.08 0.08,0.08 0.07,0.06 0.09,0.08 0.09,0.08 0.48,0.41 0.97,0.64 1.49,0.87 0.62,0.27 1.29,0.53 1.93,0.74 2.51,0.85 5.17,1.36 7.79,1.69"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 317.09,559.44 c 1.91,-1.52 3.78,-3.17 5.24,-5.14 0.92,-1.25 1.67,-2.69 1.8,-4.26 0.09,-0.99 -0.1,-2.02 -0.44,-2.92 -0.42,-1.13 -1.07,-2.17 -1.89,-3.05 -0.92,-0.97 -2.05,-1.76 -3.33,-2.16 -0.87,-0.27 -1.81,-0.33 -2.71,-0.2 -1.08,0.15 -2.12,0.54 -3.11,0.99 -1.61,0.74 -3.17,1.68 -4.65,2.65 -2.25,1.49 -4.55,3.17 -6.64,4.87 -1.59,1.31 -3.14,2.72 -4.45,4.31 -0.93,1.14 -1.75,2.4 -2.3,3.78 -0.38,0.96 -0.64,1.99 -0.64,3.03 0,1.1 0.31,2.18 0.85,3.14 1.3,2.29 3.76,4.06 6.45,3.92 1.73,-0.09 3.33,-0.89 4.76,-1.81 1.24,-0.82 2.48,-1.8 3.44,-2.92 1.18,-1.38 2,-3.35 1.57,-5.16 -0.28,-1.25 -0.88,-2.29 -1.56,-3.34 -1.07,-1.61 -2.38,-3.12 -3.68,-4.55"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 276.63,470.66 c -0.43,0.66 -0.99,1.39 -1.6,1.86 -0.7,0.54 -1.39,0.83 -2.21,1.04 -1.12,0.28 -2.3,0.33 -3.45,0.29 -2.62,-0.11 -5.19,-0.84 -7.66,-1.66 l -6.51,-2.33 c -1.48,-0.5 -3.05,-0.96 -4.63,-0.75 -1.07,0.13 -2.12,0.41 -3.11,0.84 -0.89,0.39 -1.86,1.01 -2.41,1.79 -0.75,1.07 -0.81,2.36 -0.65,3.6 0.16,1.11 0.51,2.19 0.97,3.21 0.64,1.41 1.71,2.84 3.16,3.38 1.89,0.71 3.98,0.07 5.53,-1.09 0.85,-0.63 1.58,-1.42 2.25,-2.24 2.19,-2.71 4.77,-7.55 6.62,-10.55 1.12,-1.8 2.29,-3.67 3.75,-5.22 0.93,-0.98 2.05,-1.85 3.37,-2.22 0.77,-0.21 1.59,-0.26 2.37,-0.11 0.95,0.18 1.81,0.63 2.49,1.25 0.62,0.57 1.06,1.18 1.48,1.89 0.4,0.69 0.72,1.43 0.96,2.19 0.29,0.91 0.47,2 0.24,2.92 -0.19,0.74 -0.56,1.3 -0.96,1.91 z"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 281.35,296.8 c -6.7,-2.45 -14.05,-5.11 -20.91,-6.98 -2.88,-0.75 -5.87,-1.5 -8.84,-1.76 -1.31,-0.1 -2.86,-0.04 -3.88,0.86 -0.07,0.06 -0.1,0.09 -0.1,0.09 -0.06,0.06 -0.1,0.1 -0.1,0.1 -0.06,0.07 -0.09,0.1 -0.09,0.1 -0.06,0.07 -0.09,0.1 -0.09,0.1 -0.28,0.35 -0.45,0.69 -0.6,1.07 -0.14,0.35 -0.25,0.75 -0.27,1.08 -0.05,1.01 0.44,1.84 0.96,2.61 0.79,1.1 1.76,2.09 2.71,3.05 1.82,1.8 3.89,3.61 5.84,5.27 1.92,1.61 3.97,3.3 6.01,4.75 1.09,0.75 2.34,1.6 3.68,1.59 0.07,0 0.09,0 0.09,0 0.07,0 0.09,-0.01 0.09,-0.01 0.07,-0.01 0.09,-0.01 0.09,-0.01 0.07,-0.01 0.09,-0.01 0.09,-0.01 0.07,-0.01 0.09,-0.02 0.09,-0.02 0.07,-0.02 0.09,-0.02 0.09,-0.02 0.07,-0.02 0.09,-0.03 0.09,-0.03 0.07,-0.02 0.09,-0.03 0.09,-0.03 0.07,-0.03 0.09,-0.03 0.09,-0.03 0.07,-0.03 0.09,-0.04 0.09,-0.04 0.07,-0.03 0.09,-0.04 0.09,-0.04 0.07,-0.04 0.09,-0.05 0.09,-0.05 0.07,-0.04 0.09,-0.05 0.09,-0.05 0.07,-0.04 0.09,-0.06 0.09,-0.06 0.06,-0.05 0.09,-0.07 0.09,-0.07 0.06,-0.05 0.09,-0.07 0.09,-0.07 0.06,-0.06 0.09,-0.08 0.09,-0.08 0.06,-0.06 0.09,-0.08 0.09,-0.08 0.48,-0.5 0.74,-0.98 1.02,-1.56 0.97,-2.01 2.97,-8.44 3.76,-10.63"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 293.18,231.73 c -0.98,1.48 -2.04,2.97 -3.22,4.29 -0.71,0.79 -1.49,1.54 -2.4,2.09 -1.02,0.61 -2.15,0.87 -3.31,0.78 -0.69,-0.06 -1.37,-0.27 -2,-0.59 -1.09,-0.56 -2.03,-1.38 -2.85,-2.29 -0.88,-1 -1.64,-2.13 -2.1,-3.39 -0.39,-1.08 -0.49,-2.26 -0.29,-3.39 0.22,-1.28 0.8,-2.49 1.6,-3.51 1.04,-1.34 2.44,-2.3 4.09,-2.6 1.48,-0.26 3.01,0.02 4.41,0.53 3.21,1.19 5.86,3.5 8.44,5.68 1.75,1.55 4.06,3.48 5.71,5.12 0.91,0.91 1.79,1.88 2.5,2.96 1.21,1.8 1.79,4.05 1.38,6.19 -0.54,2.82 -2.45,4.25 -5.25,4.16 -1.48,-0.04 -2.93,-0.44 -4.28,-1.01 -2.15,-0.9 -4.14,-2.18 -6.01,-3.55"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 355.91,621.72 c 3.99,-2.53 7.94,-5.43 11.63,-8.38 2.81,-2.27 5.68,-4.69 8.27,-7.21 0.84,-0.84 1.69,-1.71 2.38,-2.68 0.38,-0.54 0.73,-1.17 0.87,-1.78 0.13,-0.56 0.08,-1.12 -0.07,-1.63 -0.25,-0.85 -0.85,-1.5 -1.45,-2.06 -0.73,-0.67 -1.56,-1.26 -2.38,-1.8 -2.58,-1.7 -5.52,-3.25 -8.27,-4.69"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 425.68,656 c 3.13,-7.96 8.41,-23.22 11.29,-31.44"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 599.3,658.76 c -2.45,-8.19 -7.71,-23.46 -10.52,-31.71"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 599.83,625.48 c 4.13,-1.23 8.63,-2.71 12.88,-3.34 1.35,-0.18 2.86,-0.24 4.11,0.38 0.06,0.03 0.09,0.05 0.09,0.05 0.06,0.03 0.09,0.05 0.09,0.05 0.06,0.04 0.09,0.06 0.09,0.06 0.06,0.04 0.08,0.06 0.08,0.06 0.05,0.04 0.08,0.06 0.08,0.06 0.05,0.04 0.08,0.06 0.08,0.06 0.05,0.04 0.07,0.07 0.07,0.07 0.05,0.05 0.07,0.07 0.07,0.07 0.05,0.05 0.07,0.08 0.07,0.08 0.04,0.05 0.07,0.08 0.07,0.08 0.04,0.05 0.06,0.08 0.06,0.08 0.04,0.06 0.06,0.09 0.06,0.09 0.04,0.06 0.06,0.09 0.06,0.09 0.04,0.06 0.06,0.09 0.06,0.09 0.04,0.07 0.05,0.1 0.05,0.1 0.37,0.74 0.47,1.51 0.55,2.31 0.14,1.65 0.04,3.41 -0.03,5.07 l -1.4,22.38"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 744.67,557.29 c -6.77,-5.23 -19.94,-14.57 -27.03,-19.63"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 786.07,483.59 c -7.83,-3.44 -22.86,-9.33 -30.97,-12.53"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 230.89,396.33 c 8.48,1.1 24.4,3.81 33,5.25"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 230.55,374.64 c 8.48,1.1 24.4,3.81 33,5.25"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 241.5,308.02 c 8.01,2.99 22.9,9.24 30.95,12.59"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 346.29,157.17 c 4.38,7.34 12.09,21.53 16.27,29.18"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 608.37,114.37 c -3.01,8.01 -9.29,22.88 -12.66,30.92"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 685.75,154.59 c -5.98,6.12 -17.72,17.2 -24.04,23.2"
          />
          <path
            className={styles["darts-overlay__numbers"]}
            d="m 787.92,296.73 c -8.37,1.78 -24.28,4.48 -32.87,5.97"
          />
        </g>
        <g id="spokes">
          <line
            className={styles["darts-overlay__spokes"]}
            x1="525.79999"
            y1="403.32999"
            x2="615.57001"
            y2="579.53003"
          />
          <line
            className={styles["darts-overlay__spokes"]}
            x1="531"
            y1="399.54999"
            x2="670.83002"
            y2="539.38"
          />
          <line
            className={styles["darts-overlay__spokes"]}
            x1="519.67999"
            y1="405.32001"
            x2="550.62"
            y2="600.63"
          />
          <line
            className={styles["darts-overlay__spokes"]}
            x1="513.26001"
            y1="405.32001"
            x2="482.32001"
            y2="600.63"
          />
          <line
            className={styles["darts-overlay__spokes"]}
            x1="507.14001"
            y1="366.72"
            x2="417.37"
            y2="190.53"
          />
          <line
            className={styles["darts-overlay__spokes"]}
            x1="507.14001"
            y1="403.32999"
            x2="417.37"
            y2="579.53003"
          />
          <line
            className={styles["darts-overlay__spokes"]}
            x1="498.16"
            y1="375.70001"
            x2="321.97"
            y2="285.92001"
          />
          <line
            className={styles["darts-overlay__spokes"]}
            x1="501.94"
            y1="399.54999"
            x2="362.10999"
            y2="539.38"
          />
          <line
            className={styles["darts-overlay__spokes"]}
            x1="496.17999"
            y1="381.81"
            x2="300.85999"
            y2="350.88"
          />
          <line
            className={styles["darts-overlay__spokes"]}
            x1="525.79999"
            y1="366.72"
            x2="615.57001"
            y2="190.53"
          />
          <line
            className={styles["darts-overlay__spokes"]}
            x1="496.17999"
            y1="388.23999"
            x2="300.85999"
            y2="419.17999"
          />
          <line
            className={styles["darts-overlay__spokes"]}
            x1="498.16"
            y1="394.35001"
            x2="321.97"
            y2="484.13"
          />
          <line
            className={styles["darts-overlay__spokes"]}
            x1="501.94"
            y1="370.5"
            x2="362.10999"
            y2="230.67"
          />
          <line
            className={styles["darts-overlay__spokes"]}
            x1="519.67999"
            y1="364.73999"
            x2="550.62"
            y2="169.42"
          />
          <line
            className={styles["darts-overlay__spokes"]}
            x1="536.76001"
            y1="388.23999"
            x2="732.08002"
            y2="419.17999"
          />
          <line
            className={styles["darts-overlay__spokes"]}
            x1="513.26001"
            y1="364.73999"
            x2="482.32001"
            y2="169.42"
          />
          <line
            className={styles["darts-overlay__spokes"]}
            x1="536.76001"
            y1="381.81"
            x2="732.08002"
            y2="350.88"
          />
          <line
            className={styles["darts-overlay__spokes"]}
            x1="534.78003"
            y1="375.70001"
            x2="710.96997"
            y2="285.92001"
          />
          <line
            className={styles["darts-overlay__spokes"]}
            x1="534.78003"
            y1="394.35001"
            x2="710.96997"
            y2="484.13"
          />
          <line
            className={styles["darts-overlay__spokes"]}
            x1="531"
            y1="370.5"
            x2="670.83002"
            y2="230.67"
          />
        </g>
        <g id="rings">
          {!showBasicRings && (
            <path
              className={styles["darts-overlay__rings"]}
              d="M 806.03,385.03 C 806.07,287.41 756.59,195.98 674.85,142.62 603.61,96 514.78,83.16 433.25,107.69 c -79.88,23.91 -145.97,81.64 -180.4,157.57 -34.54,75.89 -34.54,163.64 0,239.53 35.16,77.54 103.26,135.99 185.24,158.98 80.25,22.63 166.99,9.31 236.76,-36.34 81.74,-53.35 131.22,-144.78 131.18,-242.4 z"
              id="outer-ring1"
            />
          )}
          <path
            className={styles["darts-overlay__rings"]}
            d="m 516.47,603.32 c 73.56,0.05 142.55,-37.29 182.75,-98.9 35.13,-53.68 44.83,-120.71 26.33,-182.14 -18,-60.18 -61.58,-110.08 -118.79,-136 -57.17,-26.03 -123.41,-26.04 -180.58,0 -58.43,26.48 -102.54,77.88 -119.85,139.65 -17.06,60.45 -7.01,125.93 27.39,178.49 40.2,61.61 109.19,98.95 182.75,98.9 z"
            id="double-1"
          />
          {!showBasicRings && (
            <path
              className={styles["darts-overlay__rings"]}
              d="m 516.47,593.05 c 70.1,0.04 135.85,-35.54 174.15,-94.24 33.48,-51.14 42.72,-115.04 25.1,-173.57 -17.15,-57.35 -58.68,-104.9 -113.2,-129.6 -54.48,-24.81 -117.61,-24.81 -172.08,0 -55.67,25.23 -97.72,74.22 -114.21,133.08 -16.26,57.61 -6.68,120.01 26.11,170.09 38.28,58.7 104.03,94.28 174.13,94.24 z"
              id="double-2"
            />
          )}
          <path
            className={styles["darts-overlay__rings"]}
            d="m 653.86,385.03 c 0.04,-46.26 -23.49,-89.76 -62.25,-115.02 -33.74,-22.1 -76.02,-28.22 -114.64,-16.57 -37.84,11.3 -69.31,38.79 -85.6,74.77 -16.38,35.94 -16.38,77.72 0,113.66 16.64,36.75 49.05,64.56 87.9,75.44 38.01,10.74 79.31,4.4 112.34,-17.24 38.76,-25.29 62.3,-68.78 62.25,-115.04 z"
            id="triple-1"
          />
          {!showBasicRings && (
            <path
              className={styles["darts-overlay__rings"]}
              d="M 643.59,385.03 C 643.63,342.23 621.85,301.98 586,278.61 554.79,258.16 515.66,252.5 479.93,263.27 c -35.01,10.45 -64.14,35.89 -79.2,69.18 -15.16,33.24 -15.16,71.92 0,105.16 15.39,33.99 45.39,59.74 81.33,69.8 35.16,9.94 73.38,4.07 103.94,-15.95 35.86,-23.39 57.63,-63.63 57.59,-106.43 z"
              id="triple-2"
            />
          )}
          <path
            className={styles["darts-overlay__rings"]}
            d="m 537.02,385.03 c 0.02,-6.88 -3.54,-13.46 -9.31,-17.2 -10.55,-6.87 -24.72,-2.76 -29.94,8.7 -2.45,5.32 -2.45,11.67 0,17 5.23,11.46 19.39,15.57 29.94,8.7 5.77,-3.75 9.33,-10.32 9.31,-17.2 z"
            id="b"
          />
          {!showBasicRings && (
            <path
              className={styles["darts-overlay__rings"]}
              d="m 524.62,385.03 c 0.01,-3.71 -2.55,-7 -6.15,-7.9 -5.13,-1.29 -10.1,2.55 -10.16,7.83 -0.04,5.35 4.97,9.28 10.16,7.98 3.6,-0.91 6.16,-4.2 6.15,-7.91 z"
              id="db"
            />
          )}
        </g>
      </g>
    </svg>
  );
}