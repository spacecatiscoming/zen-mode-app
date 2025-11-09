import * as THREE from "three";

export function createStarTexture() {
  const size = 32;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const grad = ctx.createRadialGradient(
    size / 2,
    size / 2,
    2,
    size / 2,
    size / 2,
    size / 2
  );
  // grad.addColorStop(0, "rgba(255,255,255,1)");
  // grad.addColorStop(0.25, "rgba(255,255,255,0.93)");
  // grad.addColorStop(0.44, "rgba(255,255,255,0.78)");
  // grad.addColorStop(0.73, "rgba(255,255,255,0.16)");
  // grad.addColorStop(1, "rgba(255,255,255,0)");

  // grad.addColorStop(0, "rgba(255,255,255,1)");
  // grad.addColorStop(0.18, "rgba(255,255,255,0.8)");
  // grad.addColorStop(0.36, "rgba(255,255,255,0.22)");
  // grad.addColorStop(0.65, "rgba(255,255,255,0.04)");
  // grad.addColorStop(0.87, "rgba(255,255,255,0.01)");
  // grad.addColorStop(1, "rgba(255,255,255,0)");

  grad.addColorStop(0, "rgba(255,255,255,1)"); // яркий центр
  grad.addColorStop(0.16, "rgba(255,255,255,0.8)"); // быстрая затухание
  grad.addColorStop(0.33, "rgba(255,255,255,0.2)"); // резкий спад
  grad.addColorStop(1, "rgba(255,255,255,0)"); // край СОВСЕМ прозрачен!

  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.fill();
  return new THREE.CanvasTexture(canvas);
}
