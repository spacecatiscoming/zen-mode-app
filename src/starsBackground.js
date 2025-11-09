// src/starsBackground.js
import * as THREE from "three";
import { createStars } from "./createStars.js";
import { createSpaceBackground } from "./createSpaceBackground.js";
import { createStarfield } from "./createStarfield.js";

// Главная функция для старта звездного фона
export function renderStarsBackground(container) {
  // Сцена и фон
  const scene = new THREE.Scene();
  scene.background = createSpaceBackground();

  // Камера
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // Рендерер
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor(0x12171a, 1);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Обработка адаптивности
  function resizeCanvas() {
    const w = window.innerWidth,
      h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.domElement.style.width = w + "px";
    renderer.domElement.style.height = h + "px";
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  // Слои звезд
  const stars1 = createStars(4500, 1.1, 320);
  const stars2 = createStars(3000, 0.6, 210);
  const stars3 = createStars(1100, 0.1, 120);
  scene.add(stars1, stars2, stars3);

  // Переменные для звездопада (starfield по кнопке)
  let starfield = null;
  let starfieldActive = false;

  // Если у тебя есть кнопка starBtn – присобачь обработчик так:
  const starBtn = document.getElementById("starBtn");
  if (starBtn) {
    starBtn.addEventListener("click", () => {
      if (!starfieldActive) {
        starfield = createStarfield(1300, 400, 850);
        scene.add(starfield);
        starfieldActive = true;
        starBtn.textContent = "Остановить звёзды";
      } else {
        scene.remove(starfield);
        if (starfield) {
          starfield.geometry.dispose();
          starfield.material.dispose();
          starfield = null;
        }
        starfieldActive = false;
        starBtn.textContent = "Запустить поток звёзд";
      }
    });
  }

  camera.position.z = 50;

  // Parallax — мягкое движение по мыши/тач
  let parallaxX = 0,
    parallaxY = 0;
  let targetParallaxX = 0,
    targetParallaxY = 0;

  window.addEventListener("mousemove", (e) => {
    targetParallaxX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetParallaxY = (e.clientY / window.innerHeight - 0.5) * 2;
  });
  window.addEventListener("touchmove", (e) => {
    if (!e.touches.length) return;
    const t = e.touches[0];
    targetParallaxX = (t.clientX / window.innerWidth - 0.5) * 2;
    targetParallaxY = (t.clientY / window.innerHeight - 0.5) * 2;
  });

  // Анимация
  let time = 0;
  function animate() {
    requestAnimationFrame(animate);
    time += 0.02;

    // Анимация звездопада если активен
    if (starfieldActive && starfield) {
      const geo = starfield.geometry;
      const pos = geo.attributes.position;
      const { speeds, spread, depth } = geo.userData;
      for (let i = 0; i < pos.count; i++) {
        let z = pos.getZ(i) + speeds[i] * 0.65;
        if (z > 4) {
          z = -depth * Math.random();
          pos.setX(i, (Math.random() - 0.5) * spread);
          pos.setY(i, (Math.random() - 0.5) * spread);
        }
        pos.setZ(i, z);
      }
      pos.needsUpdate = true;
    }

    // Parallax движения
    parallaxX += (targetParallaxX - parallaxX) * 0.015;
    parallaxY += (targetParallaxY - parallaxY) * 0.015;
    stars1.position.x = parallaxX * 6.5;
    stars1.position.y = parallaxY * 3.7;
    stars2.position.x = parallaxX * 2.7;
    stars2.position.y = parallaxY * 1.7;
    stars3.position.x = parallaxX * 1.2;
    stars3.position.y = parallaxY * 0.8;

    // Мерцание слоев
    stars1.material.opacity = 0.77 + 0.18 * Math.sin(time * 1.18);
    stars2.material.opacity = 0.81 + 0.14 * Math.sin(time * 0.75);
    stars3.material.opacity = 0.86 + 0.1 * Math.cos(time * 1.35);

    renderer.render(scene, camera);
  }
  animate();
}
