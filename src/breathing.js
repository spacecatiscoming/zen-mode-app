// Цвета для этапов
const breathStepStyles = {
  "Вдох":       { bg: "radial-gradient(circle at 35% 32%, #7fd8ff 0%, #3fa6f7 65%, #293f54 100%)", shadow: "0 0 36px #79ebff", },
  "Задержка":   { bg: "radial-gradient(circle at 35% 32%, #b886fd 0%, #9980fa 68%, #4a2d7a 100%)", shadow: "0 0 36px #b886fd", },
  "Выдох":      { bg: "radial-gradient(circle at 35% 32%, #4fa4fd 0%, #314c7a 65%, #233958 100%)", shadow: "0 0 36px #4fa4fd", },
  "Пауза":      { bg: "radial-gradient(circle at 35% 32%, #8ce6d7 0%, #44d9ae 76%, #16997c 100%)", shadow: "0 0 36px #8ce6d7", }
};

const breathQuotes = {
  "Вдох": [
    "Вдыхаем свежесть нового момента",
    "С каждым вдохом ты наполняешься энергией",
    "Позволь спокойствию заполнить тебя"
  ],
  "Задержка": [
    "Пауза — в ней рождается умиротворение",
    "Почувствуй свой центр",
    "Остановись, чтобы отпустить тревоги"
  ],
  "Выдох": [
    "С выдохом уходят заботы",
    "Расслабься, отпуская всё лишнее",
    "Почувствуй лёгкость и свободу"
  ],
  "Пауза": [
    "Пусть тишина наполнит пространство",
    "Момент для себя, момент для внутреннего покоя",
    "Замри — ничего не мешает твоему спокойствию"
  ]
};



let breathActive = false,
    breathInterval = null,
    currentMode = "classic";

const breathingModes = {
  classic: [
    { label: "Вдох", dur: 4000 },
    { label: "Задержка", dur: 8000 },
    { label: "Выдох", dur: 4000 },
    { label: "Пауза", dur: 1000 }
  ],
  square: [
    { label: "Вдох", dur: 4000 },
    { label: "Задержка", dur: 4000 },
    { label: "Выдох", dur: 4000 },
    { label: "Пауза", dur: 4000 }
  ],
  calm: [
    { label: "Вдох", dur: 6000 },
    { label: "Задержка", dur: 2000 },
    { label: "Выдох", dur: 6000 },
    { label: "Пауза", dur: 2000 }
  ]
};

const breathInstructions = {
  classic: "Вдох — 4 сек, задержка — 8 сек, выдох — 4 сек, пауза — 1 сек.",
  square: "Вдох — 4 сек, задержка — 4 сек, выдох — 4 сек, пауза — 4 сек.",
  calm: "Вдох — 6 сек, задержка — 2 сек, выдох — 6 сек, пауза — 2 сек."
};

export function initBreathing(btnId, animId, textId) {
  const btn = document.getElementById(btnId);
  const anim = document.getElementById(animId);
  const text = document.getElementById(textId);
  const instruction = document.getElementById("breath-instruction");

  // Слушатели на выбор режима
  document.querySelectorAll(".mode-btn").forEach(btnMode => {
    btnMode.onclick = () => {
      // Визуально выделить активную кнопку
      document.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
      btnMode.classList.add("active");
      currentMode = btnMode.dataset.mode;

      // Обновить инструкцию плавно
      instruction.style.opacity = 0;
      setTimeout(() => {
        instruction.textContent = breathInstructions[currentMode] || breathInstructions.classic;
        instruction.style.opacity = 1;
      }, 210);

      // Если дыхание уже запущено — перестроить цикл
      if (breathActive) {
        clearTimeout(breathInterval);
        startBreathing(text);
      }
    };
  });

  btn.onclick = () => {
    breathActive = !breathActive;
    if (breathActive) {
      anim.classList.remove("hidden");
      btn.textContent = "❌ Стоп дыхание";
      startBreathing(text);
    } else {
      anim.classList.add("hidden");
      btn.textContent = "🫁 Дыхательная практика";
      clearTimeout(breathInterval);
      text.textContent = "";
    }
  };
}

function startBreathing(box) {
  const steps = breathingModes[currentMode] || breathingModes.classic;
  let idx = 0;
  const circle = document.querySelector(".breath-circle");
  const quoteBox = document.getElementById("breath-quote");

  function loop() {
    const step = steps[idx];
    box.textContent = step.label;

    // Смена стиля круга (как было)
    if (circle && breathStepStyles[step.label]) {
      circle.style.background = breathStepStyles[step.label].bg;
      circle.style.boxShadow  = breathStepStyles[step.label].shadow;
    }

    // Мотивационная фраза
    if (quoteBox && breathQuotes[step.label]) {
      // Случайная фраза для этапа
      const quotes = breathQuotes[step.label];
      quoteBox.textContent = quotes[Math.floor(Math.random() * quotes.length)];
      // Плавное появление
      quoteBox.style.opacity = 0;
      setTimeout(() => { quoteBox.style.opacity = 1; }, 200);
    }

    breathInterval = setTimeout(() => {
      idx = (idx + 1) % steps.length;
      loop();
    }, step.dur);
  }
  loop();
}



