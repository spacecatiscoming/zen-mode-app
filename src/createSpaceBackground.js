// import * as THREE from "three";

// export function createSpaceBackground() {
//   const canvas = document.createElement("canvas");
//   //   canvas.width = 2;
//   //   canvas.height = 512;
//   canvas.width = 2048;
//   canvas.height = 1024;
//   const ctx = canvas.getContext("2d");

//   // Градиент: глубокий чёрный, фиолетовый, бордово-фиолетовый, затем почти чёрный
//   const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
//   //   const gradient = ctx.createLinearGradient(0, 0, 0, 512);
//   gradient.addColorStop(0.25, "#060808");
//   gradient.addColorStop(0.85, "#250001"); // тёмно-бордовый/темно-красный

//   ctx.fillStyle = gradient;
//   //   ctx.fillRect(0, 0, 2, 512);
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   // Горизонтальный градиент: слева #13171A, справа #3B0908
//   //   const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
//   //   grad.addColorStop(0, "#12171A");
//   //   grad.addColorStop(1, "#3B0908");
//   //   ctx.fillStyle = grad;
//   //   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   return new THREE.CanvasTexture(canvas);
// }
import * as THREE from "three";

export function createSpaceBackground() {
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");

  // Базовый чёрный фон
  ctx.fillStyle = "#060808";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Радиальное свечение — бордово-фиолетовое пятно справа-снизу
  const glow1 = ctx.createRadialGradient(
    canvas.width * 0.75,
    canvas.height * 0.65,
    0,
    canvas.width * 0.75,
    canvas.height * 0.65,
    canvas.width * 0.55,
  );
  glow1.addColorStop(0, "rgba(58, 8, 6, 0.85)");
  glow1.addColorStop(0.5, "rgba(30, 4, 4, 0.45)");
  glow1.addColorStop(1, "rgba(6, 8, 8, 0)");
  ctx.fillStyle = glow1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Второе свечение — фиолетовое пятно слева-сверху для глубины
  const glow2 = ctx.createRadialGradient(
    canvas.width * 0.2,
    canvas.height * 0.3,
    0,
    canvas.width * 0.2,
    canvas.height * 0.3,
    canvas.width * 0.4,
  );
  glow2.addColorStop(0, "rgba(25, 8, 35, 0.6)");
  glow2.addColorStop(0.5, "rgba(12, 4, 18, 0.3)");
  glow2.addColorStop(1, "rgba(6, 8, 8, 0)");
  ctx.fillStyle = glow2;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Третье свечение — холодная синева в верхнем центре
  const glow3 = ctx.createRadialGradient(
    canvas.width * 0.5,
    canvas.height * 0.1,
    0,
    canvas.width * 0.5,
    canvas.height * 0.1,
    canvas.width * 0.35,
  );
  glow3.addColorStop(0, "rgba(15, 20, 40, 0.5)");
  glow3.addColorStop(0.5, "rgba(8, 12, 22, 0.25)");
  glow3.addColorStop(1, "rgba(6, 8, 8, 0)");
  ctx.fillStyle = glow3;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  return new THREE.CanvasTexture(canvas);
}
