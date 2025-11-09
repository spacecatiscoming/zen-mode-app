import { createZenPlayer } from "./player.js";
import { animateLoaderText } from "./loaderText.js";
import { renderStarsBackground } from "./starsBackground.js";

export function renderHome(container) {
  const tracks = [
    { src: "../music/mindful.mp3", title: "Звёздный поток" },
    { src: "../music/meditation-1.mp3", title: "Медитация 1" },
    { src: "../music/meditation-2.mp3", title: "Медитация 2" },
    { src: "../music/meditation-3.mp3", title: "Медитация 3" },
    { src: "../music/meditation-4.mp3", title: "Медитация 4" },
    { src: "../music/meditation-5.mp3", title: "Медитация 5" },
    { src: "../music/meditation-6.mp3", title: "Медитация 6" },
    { src: "../music/meditation-7.mp3", title: "Медитация 7" },
    { src: "../music/breeze.mp3", title: "Тишина Вселенной" },
    { src: "../music/reflection.mp3", title: "Умные рефлексы" },
    { src: "../music/celestial.mp3", title: "Погружение" },
    { src: "../music/clouds.mp3", title: "Невесомость" },
    { src: "../music/dream.mp3", title: "Давай мечтать вместе" },
    { src: "../music/soul.mp3", title: "Душа" },
    { src: "../music/twilight.mp3", title: "Тихое место" },
  ];

  // Верстка главной
  container.innerHTML = `
    <div id="starfield-bg"></div>
    <section class="welcome">
    <button id="starBtn" class="star-btn">Запустить звездный поток</button>
    <h1 id="loader-text"></h1>
    </section>
    <section class="music-block">
      <audio id="zen-music" controls></audio>
      <div class="controls">
        <button id="playpause" aria-label="Play" title="Play">
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7-11-7z" fill="currentColor"></path>
          </svg>
        </button>
        <button id="nexttrack" aria-label="Next" title="Next">
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 18V6l8.5 6L6 18zM17 6h2v12h-2z" fill="currentColor"></path>
          </svg>
        </button>
        <span id="track-title"></span>
      </div>
    </section>
  `;

  // Анимированный Текст
  animateLoaderText();
  // Звездный фон (canvas)
  // Передай контейнер, например, отдельный div
  renderStarsBackground(document.getElementById("starfield-bg"));

  // Музыкальный плеер
  createZenPlayer({
    tracks,
    audioId: "zen-music",
    playPauseId: "playpause",
    nextTrackId: "nexttrack",
    trackTitleId: "track-title",
  });
}
