import type { Metadata } from "next";
import "../react";

export const metadata: Metadata = {
  title: "Dartboard Calibration Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
