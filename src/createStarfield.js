import * as THREE from "three";

// Функция создания круглой текстуры для каждой звезды
function createCircleTexture(size = 32, color = "#eeeeff") {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2 - 2, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.shadowColor = color;
  ctx.shadowBlur = 6;
  ctx.fill();
  return new THREE.CanvasTexture(canvas);
}

export function createStarfield(count = 1100, spread = 350, depth = 900) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const speeds = [];

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * spread;
    positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
    positions[i * 3 + 2] = -Math.random() * depth;
    speeds[i] = 0.7 + Math.random() * 0.7; // медленно!
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.userData = { speeds, spread, depth };

  const material = new THREE.PointsMaterial({
    color: 0xeeeeff,
    size: 0.75, // меньше точки
    transparent: true,
    opacity: 0.88,
    depthWrite: false,
    map: createCircleTexture(32, "#eeeeff"),
    alphaTest: 0.58,
  });

  return new THREE.Points(geometry, material);
}
