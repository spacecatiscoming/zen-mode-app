
import { initBreathing } from "./breathing.js";


export function renderBreathing(container) {
  container.innerHTML = `
  <div class="breathing-bg"></div>
    <div class="breathing-bg"></div>
<section class="breathing-page">
  <h2 class="breath-title">Практика дыхания</h2>
  <div class="breathing-modes">
  <button class="mode-btn active" data-mode="classic">Классика 4-8-4-1</button>
  <button class="mode-btn" data-mode="square"> Квадратное 4-4-4-4</button>
  <button class="mode-btn" data-mode="calm">Успокаивающее 6-2-6-2</button>
</div>

  <button id="breath-toggle" class="breath-btn">🫁 Дыхательная практика</button>
  <div id="breath-anim" class="breath-anim hidden">
    <div class="breath-circle"></div>
    <div class="breath-text" id="breath-text"></div>
  </div>
  <p class="breath-instruction" id="breath-instruction">
  Вдох — 4 сек, задержка — 8 сек, выдох — 4 сек, пауза — 1 сек.
</p>
    <div class="breath-quote" id="breath-quote"></div>

</section>

  `;
  // Инициализация звездного фона

  // После появления элементов инициализируем дыхательную механику
  initBreathing("breath-toggle", "breath-anim", "breath-text");
}