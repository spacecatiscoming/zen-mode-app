import * as THREE from "three";
import { createStarTexture } from "./createStarTexture.js";

export function createStars(count, size, spread) {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  const colors = [];
  for (let i = 0; i < count; i++) {
    vertices.push(
      (Math.random() - 0.5) * spread,
      (Math.random() - 0.5) * spread,
      (Math.random() - 0.5) * spread
    );
    colors.push(1, 1, 1);
  }
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  const material = new THREE.PointsMaterial({
    size,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    sizeAttenuation: true,
    map: createStarTexture(),
    // alphaTest: 0.13,
    alphaTest: 0.35,
  });
  return new THREE.Points(geometry, material);
}
