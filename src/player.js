export function createZenPlayer({
  tracks,
  audioId = "zen-music",
  playPauseId = "playpause",
  nextTrackId = "nexttrack",
  trackTitleId = "track-title",
}) {
  let currentTrack = 0;
  const audio = document.getElementById(audioId);
  const playpause = document.getElementById(playPauseId);
  const nexttrack = document.getElementById(nextTrackId);
  const tracktitle = document.getElementById(trackTitleId);

  function loadTrack(index) {
    audio.src = tracks[index].src;
    tracktitle.textContent = tracks[index].title;
  }

  function playCurrent() {
    audio
      .play()
      .then(() => {
        const svg = playpause.querySelector("svg");
        svg.innerHTML =
          '<path d="M7 6h3v12H7zM14 6h3v12h-3z" fill="currentColor"></path>';
        playpause.setAttribute("aria-label", "Pause");
        playpause.title = "Pause";
      })
      .catch((e) => {
        console.log("Ошибка автозапуска:", e);
      });
  }

  playpause.addEventListener("click", () => {
    const svg = playpause.querySelector("svg");
    if (audio.paused) {
      if (!audio.src) {
        loadTrack(currentTrack);
      }
      playCurrent();
    } else {
      audio.pause();
      svg.innerHTML =
        '<path d="M8 5v14l11-7-11-7z" fill="currentColor"></path>';
      playpause.setAttribute("aria-label", "Play");
      playpause.title = "Play";
    }
  });

  nexttrack.addEventListener("click", () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    playCurrent();
  });

  audio.addEventListener("ended", () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    playCurrent();
  });

  // При загрузке страницы — отобразить название текущего трека
  loadTrack(currentTrack);
}
