import React from "react";
import { Image } from "react-bootstrap";

export default function index({ src, style }) {
  return (
    <Image
      src={src}
      alt="object"
      className="position-fixed"
      style={{
        zIndex: 1,
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}
