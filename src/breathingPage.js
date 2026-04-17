// src/breathingPage.js
import { initBreathing } from "./breathing.js";

export function renderBreathing(container) {
  document.body.style.overflow = "";

  container.innerHTML = `
    <div class="breathing-bg"></div>
    <section class="breathing-page">
      <h2 class="breath-title">Практика дыхания</h2>

      <div class="breathing-modes">
        <button class="mode-btn active" data-mode="classic">Классика</button>
        <button class="mode-btn" data-mode="square">Квадрат</button>
        <button class="mode-btn" data-mode="calm">Покой</button>
      </div>

      <p class="breath-instruction" id="breath-instruction">
        Вдох 4 с · Задержка 8 с · Выдох 4 с · Пауза 1 с
      </p>

      <button id="breath-toggle" class="breath-btn">Начать практику</button>

      <div id="breath-anim" class="breath-anim hidden">
        <div class="breath-circle">
          <span class="breath-timer" id="breath-timer"></span>
        </div>
        <div class="breath-text" id="breath-text"></div>
        <div class="breath-quote" id="breath-quote"></div>
        <div class="breath-cycle" id="breath-cycle"></div>
      </div>
    </section>
  `;

  initBreathing("breath-toggle", "breath-anim", "breath-text");

  return function cleanup() {
    document.body.style.overflow = "";
  };
}
