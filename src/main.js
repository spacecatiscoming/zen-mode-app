// src/main.js
import { renderHome } from "./home.js";
import { renderBreathing } from "./breathingPage.js";
import { renderBlog } from "./blogPage.js";

let currentCleanup = null;

function router() {
  if (currentCleanup) {
    currentCleanup();
    currentCleanup = null;
  }

  const route = window.location.hash.replace("#", "") || "home";
  const app = document.getElementById("app");
  app.innerHTML = "";

  document.body.dataset.page = route;

  if (route === "home") currentCleanup = renderHome(app);
  if (route === "breathing") currentCleanup = renderBreathing(app);
  if (route === "blog") currentCleanup = renderBlog(app);

  // Активный класс
  document
    .querySelectorAll(".nav-links a, .nav-links-right a, .nav-mobile a")
    .forEach((a) => {
      const href = a.getAttribute("href").replace("#", "");
      a.classList.toggle("active", href === route);
    });
}

window.addEventListener("hashchange", router);

document.addEventListener("DOMContentLoaded", () => {
  if (!window.location.hash || window.location.hash === "#") {
    window.location.hash = "#home";
  } else {
    router();
  }

  const burger = document.querySelector(".nav-burger");
  const navMobile = document.querySelector(".nav-mobile");

  if (burger && navMobile) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("open");
      navMobile.classList.toggle("open");
    });

    navMobile.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        burger.classList.remove("open");
        navMobile.classList.remove("open");
      });
    });

    window.addEventListener("hashchange", () => {
      burger.classList.remove("open");
      navMobile.classList.remove("open");
    });
  }
});
