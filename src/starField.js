// export function createTwinklingStarField(canvas, options = {}) {
//   const ctx = canvas.getContext('2d');
//   let width = options.width || window.innerWidth;
//   let height = options.height || window.innerHeight;
//   canvas.width = width;
//   canvas.height = height;

//   const gradient = ctx.createLinearGradient(0, 0, width, 0);
//   gradient.addColorStop(0, 'rgb(5, 22, 26)');
//   gradient.addColorStop(1, 'rgb(64, 11, 8)');

//   const starCount = options.starCount || 700;
//   const stars = [];
//   for (let i = 0; i < starCount; i++) {
//     stars.push({
//       x: Math.random() * width,
//       y: Math.random() * height,
//       radius: Math.random() * 0.5 + 0.1,
//       // baseOpacity: Math.random() * 0.3 + 0.7,
//       baseOpacity: Math.random() * 0.2 + 0.85,
//       twinkleSpeed: Math.random() * 0.05 + 0.01,
//       twinklePhase: Math.random() * Math.PI * 2,
//       // flashSpeed: Math.random() * 0.02 + 0.015,
//       flashSpeed: Math.random() * 0.02 + 0.017,
//       flashPhase: Math.random() * Math.PI * 2
//     });
//   }

//   // Параметры падающей звезды
//   let shootingStar = null;
//   let lastShootTime = 0;

//   function spawnShootingStar() {
//     const startY = Math.random() * height * 0.6 + 0.1 * height; // В верхней части экрана
//     shootingStar = {
//       x: Math.random() * width * 0.8 + 0.1 * width,
//       y: startY,
//       vx: Math.random() * 12 + 8, // Скорость по x
//       vy: Math.random() * 4 + 2,  // Скорость по y
//       radius: Math.random() * 1.2 + 0.4,
//       opacity: 1.0,
//       trail: []
//     };
//     lastShootTime = performance.now();
//   }


// function drawStar(star, time) {
//   // Мерцающее значение прозрачности
//   // const opacity = star.baseOpacity + 0.4 * Math.sin(time * star.twinkleSpeed + star.twinklePhase);
//   const opacity = star.baseOpacity + 0.5 * Math.sin(time * star.twinkleSpeed + star.twinklePhase);

//   // Эффект блеска: короткая вспышка, увеличивающая shadowBlur и яркость
//   const flash = 0.8 * Math.pow(Math.max(Math.sin(time * star.flashSpeed + star.flashPhase), 0), 4);
//   // const flash = 1.3 * Math.pow(Math.max(Math.sin(time * star.flashSpeed + star.flashPhase), 0), 4);
//   const totalOpacity = Math.min(Math.max(opacity + flash, 0.1), 1.1); // итого прозрачность
//   // const blur = 28 + flash * 27; // blur усиливается во вспышке
//   const blur = 21 + flash * 20; // blur усиливается во вспышке

//   ctx.save();
//   ctx.globalAlpha = totalOpacity;
//   // Слой 1: большое свечение
//   ctx.beginPath();
//   ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
//   ctx.fillStyle = '#fff';
//   ctx.shadowColor = '#fff';
//   ctx.shadowBlur = blur;
//   ctx.fill();

//   ctx.restore();
// }


//   function drawShootingStar(star) {
//     // Трейл (хвост)
//     ctx.save();
//     for (let i = 0; i < star.trail.length; i++) {
//       const trailPart = star.trail[i];
//       ctx.globalAlpha = 0.6 * (1 - i / star.trail.length);
//       ctx.beginPath();
//       ctx.arc(trailPart.x, trailPart.y, star.radius * (1 - i / star.trail.length), 0, 2 * Math.PI);
//       ctx.fillStyle = '#fff';
//       ctx.shadowColor = '#fff';
//       ctx.shadowBlur = 14;
//       ctx.fill();
//     }
//     ctx.restore();

//     // Голова падающей звезды
//     ctx.save();
//     ctx.globalAlpha = star.opacity;
//     ctx.beginPath();
//     ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
//     ctx.fillStyle = '#fff';
//     ctx.shadowColor = '#fff';
//     ctx.shadowBlur = 16;
//     ctx.fill();
//     ctx.restore();
//   }

//   function animate(time = 0) {
//     // Актуальные размеры (на случай ресайза)
//     width = canvas.width;
//     height = canvas.height;

//     ctx.fillStyle = gradient;
//     ctx.fillRect(0, 0, width, height);
//     for (const star of stars) {
//       drawStar(star, time / 16);
//     }

//     // Обработка падающей звезды
//     if (shootingStar) {
//       shootingStar.trail.unshift({ x: shootingStar.x, y: shootingStar.y });
//       if (shootingStar.trail.length > 15) shootingStar.trail.pop();

//       shootingStar.x += shootingStar.vx;
//       shootingStar.y += shootingStar.vy;
//       shootingStar.opacity *= 0.97; // Затухание

//       drawShootingStar(shootingStar);

//       // Если вышла за пределы экрана или затухла — убрать
//       if (
//         shootingStar.x > width + 50 ||
//         shootingStar.y > height + 50 ||
//         shootingStar.opacity < 0.05
//       ) {
//         shootingStar = null;
//       }
//     }

//     // Каждые 10 секунд запуск новой падающей звезды, если сейчас нет падающей
//     if (!shootingStar && time - lastShootTime > 5000) {
//       spawnShootingStar();
//     }

//     requestAnimationFrame(animate);
//   }

//   animate();
// }
// КОНЕЦ ПАДАЮЩЕЙ ЗВЕЗДЫ




