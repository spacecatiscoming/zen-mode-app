// src/loaderText.js
export function animateLoaderText() {
  const phrases = [
    "Сила медитации",
    "Ты находишься в покое",
    "Дыши глубоко и спокойно",
    "Звёзды всегда рядом с тобой",
    "В тишине рождается сила",
    "Пусть мысли текут свободно",
    "Доверься моменту — сейчас всё хорошо",
    "В каждом вдохе — новая энергия",
    "Ты — часть бесконечного космоса",
    "Загляни внутрь — там всегда тишина",
    "Ощути лёгкость прямо сейчас",
    "Все события — просто поток жизни",
    "Позволь себе расслабиться",
    "Всё проходит — и ты остаёшься",
    "Покой внутри тебя сильнее любой суеты",
    "Ты любим и защищён вселенной",
    "Сила течёт во мне — я един с силой",
    "Каждый момент — начало нового пути",
    "Вселенная тебя оберегает и любит",
    "Время замедляется, когда ты в покое",
    "Ты способен на большее, чем думаешь",
  ];

  const container = document.getElementById("loader-text");
  let idx = 0;
  let intervalId = null;

  function showPhrase(text) {
    container.innerHTML = "";
    [...text].forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.classList.add("loader-letter");
      container.appendChild(span);
    });
    container.querySelectorAll(".loader-letter").forEach((span, i) => {
      setTimeout(() => span.classList.add("visible"), 200 * i);
    });
  }

  function nextPhrase() {
    container.classList.add("loader-fadeout");
    setTimeout(() => {
      container.classList.remove("loader-fadeout");
      showPhrase(phrases[idx]);
      idx = (idx + 1) % phrases.length;
    }, 650);
  }

  showPhrase(phrases[idx]);
  idx = (idx + 1) % phrases.length;
  intervalId = setInterval(nextPhrase, 10000);

  return function cleanup() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };
}
