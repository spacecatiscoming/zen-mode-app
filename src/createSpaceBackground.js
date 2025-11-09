import * as THREE from "three";

export function createSpaceBackground() {
  const canvas = document.createElement("canvas");
  //   canvas.width = 2;
  //   canvas.height = 512;
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");

  // Градиент: глубокий чёрный, фиолетовый, бордово-фиолетовый, затем почти чёрный
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  //   const gradient = ctx.createLinearGradient(0, 0, 0, 512);
  gradient.addColorStop(0.25, "#060808");
  gradient.addColorStop(0.85, "#250001"); // тёмно-бордовый/темно-красный

  ctx.fillStyle = gradient;
  //   ctx.fillRect(0, 0, 2, 512);
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Горизонтальный градиент: слева #13171A, справа #3B0908
  //   const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
  //   grad.addColorStop(0, "#12171A");
  //   grad.addColorStop(1, "#3B0908");
  //   ctx.fillStyle = grad;
  //   ctx.fillRect(0, 0, canvas.width, canvas.height);

  return new THREE.CanvasTexture(canvas);
}
