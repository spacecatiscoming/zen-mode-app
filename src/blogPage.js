// src/blogPage.js

export function renderBlog(container) {
  const articles = [
    {
      title: "Исцеляющее дыхание",
      date: "2025-11-06",
      text: "Техника полного йоговского дыхания позволяет снять тревожность и вернуть ясность мышления. Попробуй практиковать утром или вечером — эффект проявится почти сразу.",
    },
    {
      title: "Медитация на звёздное небо",
      date: "2025-11-01",
      text: "Сосредоточься на изображении звездного неба и позволь своему разуму раствориться среди космических огней. Это помогает отпустить суету дня и обрести спокойствие перед сном.",
    },
    {
      title: "Поток мысли",
      date: "2025-10-29",
      text: "Не мешай мыслям идти своим чередом — наблюдай, как внутренний диалог рассеивается и уступает место глубинному покою.",
    },
    // ...Добавь свои статьи!
  ];

  let activeIdx = 0;

  function render() {
    container.innerHTML = `
      <section class="blog-main-layout">
        <aside class="blog-list-menu">
          <ul>
            ${articles
              .map(
                (a, i) => `
              <li class="blog-menu-item${
                i === activeIdx ? " active" : ""
              }" data-idx="${i}">
                ${a.title}
              </li>`
              )
              .join("")}
          </ul>
        </aside>
        <div class="blog-article-viewport">
          <article class="blog-card">
            <div class="blog-date">${articles[activeIdx].date}</div>
            <h3 class="blog-card-title">${articles[activeIdx].title}</h3>
            <div class="blog-card-text">${articles[activeIdx].text}</div>
          </article>
        </div>
      </section>
    `;

    // Вешаем обработчики на эл-ты списка
    const items = container.querySelectorAll(".blog-menu-item");
    items.forEach((item) => {
      item.addEventListener("click", () => {
        activeIdx = Number(item.dataset.idx);
        render();
      });
    });
  }

  render();
}
