document.addEventListener("DOMContentLoaded", () => {
  if (!window.location.hash || window.location.hash === "#") {
    window.location.hash = "#home";
  }
});

import { renderHome } from "./home.js";
import { renderBreathing } from "./breathingPage.js";
import { renderBlog } from "./blogPage.js";
function router() {
  const route = window.location.hash.replace("#", "") || "home";
  const app = document.getElementById("app");
  if (route === "home") renderHome(app);
  if (route === "breathing") renderBreathing(app);
  if (route === "blog") renderBlog(app);
  // ...остальные секции
}
window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);

// Навигация
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".nav-burger");
  const navLinks = document.querySelector(".nav-links");

  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    // Автоматически закрывать меню при переходе
    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });

    window.addEventListener("hashchange", () => {
      navLinks.classList.remove("open");
    });
  }
});
