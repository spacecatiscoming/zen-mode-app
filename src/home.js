// src/home.js
import { createZenPlayer } from "./player.js";
import { animateLoaderText } from "./loaderText.js";
import { renderStarsBackground } from "./starsBackground.js";

const BASE = "https://spacecatiscoming.github.io/zen-mode-app/music";

const tracks = [
  { src: `${BASE}/mindful.mp3`, title: "Звёздный поток" },
  { src: `${BASE}/meditation-1.mp3`, title: "Медитация 1" },
  { src: `${BASE}/meditation-2.mp3`, title: "Медитация 2" },
  { src: `${BASE}/meditation-3.mp3`, title: "Медитация 3" },
  { src: `${BASE}/meditation-4.mp3`, title: "Медитация 4" },
  { src: `${BASE}/meditation-5.mp3`, title: "Медитация 5" },
  { src: `${BASE}/meditation-6.mp3`, title: "Медитация 6" },
  { src: `${BASE}/meditation-7.mp3`, title: "Медитация 7" },
  { src: `${BASE}/breeze.mp3`, title: "Тишина Вселенной" },
  { src: `${BASE}/reflection.mp3`, title: "Умные рефлексы" },
  { src: `${BASE}/celestial.mp3`, title: "Погружение" },
  { src: `${BASE}/clouds.mp3`, title: "Невесомость" },
  { src: `${BASE}/dream.mp3`, title: "Давай мечтать вместе" },
  { src: `${BASE}/soul.mp3`, title: "Душа" },
  { src: `${BASE}/twilight.mp3`, title: "Тихое место" },
];

export function renderHome(container) {
  document.body.style.overflow = "hidden";

  container.innerHTML = `
  <div id="starfield-bg"></div>

  <section class="welcome">
    <p class="home-school-name">Школа развития интуиции</p>
    <h1 id="loader-text"></h1>
    <p class="home-player-hint">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M8 5v14l11-7-11-7z"/>
      </svg>
      Включи музыку для медитации
    </p>
  </section>

  <!-- ✅ Кнопка СНАРУЖИ .welcome — нет pointer-events: none -->
  <button class="home-cta" id="home-cta-btn">
    Дыхательная практика
  </button>

  <button id="starBtn" class="star-btn" aria-label="Запустить звёздный поток">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>
    Звёздный поток
  </button>

  <div class="player-bar">
    <audio id="zen-music" style="display:none"></audio>
    <button id="playpause" class="player-btn" aria-label="Play/Pause">
      <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 5v14l11-7-11-7z" fill="currentColor"/>
      </svg>
    </button>
    <div class="player-info">
      <span id="track-title" class="player-title"></span>
      <span class="player-hint">zen music</span>
    </div>
    <button id="nexttrack" class="player-btn" aria-label="Next">
      <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 18V6l8.5 6L6 18zM17 6h2v12h-2z" fill="currentColor"/>
      </svg>
    </button>
  </div>
`;

  // Навигация на страницу дыхания
  const ctaBtn = document.getElementById("home-cta-btn");
  if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
      window.location.hash = "#breathing";
    });
  }

  const loaderCleanup = animateLoaderText();
  const starsCleanup = renderStarsBackground(
    document.getElementById("starfield-bg"),
  );

  createZenPlayer({
    tracks,
    audioId: "zen-music",
    playPauseId: "playpause",
    nextTrackId: "nexttrack",
    trackTitleId: "track-title",
  });

  // ✅ Кнопка ведёт на страницу дыхания
  document.getElementById("home-cta-btn")?.addEventListener("click", () => {
    window.dispatchEvent(new CustomEvent("navigate", { detail: "breathing" }));
  });

  return function cleanup() {
    document.body.style.overflow = "";
    if (loaderCleanup) loaderCleanup();
    if (starsCleanup) starsCleanup();
  };
}
