export function animateLoaderText() {
  const phrases = [
    "Power of meditation",
    "Ты находишься в покое",
    "Дыши глубоко и спокойно",
    "Звезды всегда рядом",
    "В тишине рождается сила",
    "Пусть мысли текут свободно",
    "Доверься моменту — сейчас всё хорошо",
    "Твое дыхание приносит умиротворение",
    "В каждом вдохе — новая энергия",
    "Ощути легкость прямо сейчас",
    "Все события — просто поток жизни",
    "Здесь безопасно и спокойно",
    "Позволь себе расслабиться",
    "Всё проходит — и ты остаёшься",
    "Покой внутри тебя сильнее любой суеты",
    "Ты любим и защищён вселенной",
    "Сила течет во мне и я един с силой",
    "Я люблю тебя",
    "Вселенная тебя оберегает и любит",
    "Состояние покоя — твоя опора",
    "Время замедляется, когда ты в покое",
  ];
  const container = document.getElementById("loader-text");
  let idx = 0;

  function showPhrase(text) {
    container.innerHTML = "";
    [...text].forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.classList.add("loader-letter");
      container.appendChild(span);
    });
    const letters = container.querySelectorAll(".loader-letter");
    letters.forEach((span, i) => {
      setTimeout(() => {
        span.classList.add("visible");
      }, 200 * i);
    });
  }

  function nextPhrase() {
    // Fade-out: убрать все буквы плавно
    container.classList.add("loader-fadeout");
    setTimeout(() => {
      container.classList.remove("loader-fadeout");
      showPhrase(phrases[idx]);
      idx = (idx + 1) % phrases.length;
    }, 650); // 650мс — должно совпадать с transition в CSS
  }

  showPhrase(phrases[idx]);
  idx = (idx + 1) % phrases.length;
  setInterval(nextPhrase, 10000);
}
