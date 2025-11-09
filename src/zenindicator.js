export function setupZenIndicator(audioId, indicatorId) {
  const audio = document.getElementById(audioId);
  const zenIndicator = document.getElementById(indicatorId);
  function show() {
    zenIndicator.classList.remove("hidden");
    zenIndicator.classList.add("show");
  }
  function hide() {
    zenIndicator.classList.remove("show");
    zenIndicator.classList.add("hidden");
  }
  audio.onplay = show;
  audio.onpause = hide;
  audio.onended = hide;
}
