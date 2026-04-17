// src/breathing.js
const breathStepStyles = {
  Вдох: {
    bg: "radial-gradient(circle at 35% 32%, #7fd8ff 0%, #3fa6f7 65%, #293f54 100%)",
    shadow: "0 0 36px #79ebff",
  },
  Задержка: {
    bg: "radial-gradient(circle at 35% 32%, #b886fd 0%, #9980fa 68%, #4a2d7a 100%)",
    shadow: "0 0 36px #b886fd",
  },
  Выдох: {
    bg: "radial-gradient(circle at 35% 32%, #4fa4fd 0%, #314c7a 65%, #233958 100%)",
    shadow: "0 0 36px #4fa4fd",
  },
  Пауза: {
    bg: "radial-gradient(circle at 35% 32%, #8ce6d7 0%, #44d9ae 76%, #16997c 100%)",
    shadow: "0 0 36px #8ce6d7",
  },
};

const breathQuotes = {
  Вдох: [
    "Вдыхаем свежесть нового момента",
    "С каждым вдохом ты наполняешься энергией",
    "Позволь спокойствию заполнить тебя",
  ],
  Задержка: [
    "Пауза — в ней рождается умиротворение",
    "Почувствуй свой центр",
    "Остановись, чтобы отпустить тревоги",
  ],
  Выдох: [
    "С выдохом уходят заботы",
    "Расслабься, отпуская всё лишнее",
    "Почувствуй лёгкость и свободу",
  ],
  Пауза: [
    "Пусть тишина наполнит пространство",
    "Момент для себя, момент для внутреннего покоя",
    "Замри — ничего не мешает твоему спокойствию",
  ],
};

const breathingModes = {
  classic: [
    { label: "Вдох", dur: 4000 },
    { label: "Задержка", dur: 8000 },
    { label: "Выдох", dur: 4000 },
    { label: "Пауза", dur: 1000 },
  ],
  square: [
    { label: "Вдох", dur: 4000 },
    { label: "Задержка", dur: 4000 },
    { label: "Выдох", dur: 4000 },
    { label: "Пауза", dur: 4000 },
  ],
  calm: [
    { label: "Вдох", dur: 6000 },
    { label: "Задержка", dur: 2000 },
    { label: "Выдох", dur: 6000 },
    { label: "Пауза", dur: 2000 },
  ],
};

const breathInstructions = {
  classic: "Вдох 4 с · Задержка 8 с · Выдох 4 с · Пауза 1 с",
  square: "Вдох 4 с · Задержка 4 с · Выдох 4 с · Пауза 4 с",
  calm: "Вдох 6 с · Задержка 2 с · Выдох 6 с · Пауза 2 с",
};

export function initBreathing(btnId, animId, textId) {
  let breathActive = false;
  let breathInterval = null;
  let currentMode = "classic";
  let sessionId = 0;
  let cycleCount = 0;

  const btn = document.getElementById(btnId);
  const anim = document.getElementById(animId);
  const text = document.getElementById(textId);
  const instruction = document.getElementById("breath-instruction");
  const cycleCounter = document.getElementById("breath-cycle");

  document.querySelectorAll(".mode-btn").forEach((btnMode) => {
    btnMode.onclick = () => {
      document
        .querySelectorAll(".mode-btn")
        .forEach((b) => b.classList.remove("active"));
      btnMode.classList.add("active");
      currentMode = btnMode.dataset.mode;
      instruction.style.opacity = 0;
      setTimeout(() => {
        instruction.textContent =
          breathInstructions[currentMode] || breathInstructions.classic;
        instruction.style.opacity = 1;
      }, 210);
      if (breathActive) {
        clearTimeout(breathInterval);
        cycleCount = 0;
        startBreathing(text);
      }
    };
  });

  btn.onclick = () => {
    breathActive = !breathActive;
    if (breathActive) {
      anim.classList.remove("hidden");
      btn.textContent = "Остановить"; // ✅ без эмодзи
      cycleCount = 0;
      startBreathing(text);
      // ✅ Не даём экрану гаснуть во время практики
      if ("wakeLock" in navigator) {
        navigator.wakeLock.request("screen").catch(() => {});
      }
    } else {
      anim.classList.add("hidden");
      btn.textContent = "Начать практику"; // ✅ без эмодзи
      clearTimeout(breathInterval);
      text.textContent = "";
      const circle = document.querySelector(".breath-circle");
      if (circle) circle.style.transform = "scale(1)";
    }
  };

  function startBreathing(box) {
    const id = ++sessionId;
    const steps = breathingModes[currentMode] || breathingModes.classic;
    let idx = 0;
    const circle = document.querySelector(".breath-circle");
    const quoteBox = document.getElementById("breath-quote");

    function loop() {
      if (id !== sessionId) return;

      const step = steps[idx];
      const seconds = Math.round(step.dur / 1000);
      box.textContent = `${step.label}  ·  ${seconds} с`;

      // ✅ Таймер обратного отсчёта внутри круга
      const timerEl = document.getElementById("breath-timer");
      if (timerEl) {
        let remaining = seconds;
        timerEl.textContent = remaining;

        const ticker = setInterval(() => {
          if (id !== sessionId) {
            clearInterval(ticker);
            return;
          }
          remaining--;
          if (remaining <= 0) {
            clearInterval(ticker);
            timerEl.textContent = "";
          } else {
            timerEl.textContent = remaining;
          }
        }, 1000);
      }

      if (circle && breathStepStyles[step.label]) {
        const scale =
          step.label === "Вдох" ? 1.35 : step.label === "Выдох" ? 0.85 : 1.1;
        circle.style.transition = `transform ${step.dur}ms ease-in-out, background 0.8s ease, box-shadow 0.8s ease`;
        circle.style.background = breathStepStyles[step.label].bg;
        circle.style.boxShadow = breathStepStyles[step.label].shadow;
        circle.style.transform = `scale(${scale})`;
      }

      if (quoteBox && breathQuotes[step.label]) {
        const quotes = breathQuotes[step.label];
        const lastIdx = parseInt(quoteBox.dataset.lastIdx ?? "-1");
        let newIdx;
        do {
          newIdx = Math.floor(Math.random() * quotes.length);
        } while (newIdx === lastIdx && quotes.length > 1);
        quoteBox.dataset.lastIdx = newIdx;
        quoteBox.style.opacity = 0;
        setTimeout(() => {
          if (id !== sessionId) return;
          quoteBox.textContent = quotes[newIdx];
          quoteBox.style.opacity = 1;
        }, 200);
      }

      breathInterval = setTimeout(() => {
        if (!breathActive || id !== sessionId) return;
        idx = (idx + 1) % steps.length;
        if (idx === 0) {
          cycleCount++;
          if (cycleCounter) cycleCounter.textContent = `Цикл ${cycleCount}`;
        }
        loop();
      }, step.dur);
    }

    loop();
  }
}
