export const planetSVGs = {
  mercury: `<svg class="planet-3d" width="180" height="180" viewBox="0 0 180 180">
    <defs><radialGradient id="grad-mercury-big" cx="33%" cy="33%" r="70%">
      <stop offset="0%" stop-color="#fff" stop-opacity="1"/>
      <stop offset="70%" stop-color="#bca27d"/>
      <stop offset="100%" stop-color="#60584e"/>
    </radialGradient></defs>
    <circle cx="90" cy="90" r="75" fill="url(#grad-mercury-big)" />
  </svg>`,
  venus: `<svg class="planet-3d" width="180" height="180" viewBox="0 0 180 180">
    <defs><radialGradient id="grad-venus-big" cx="35%" cy="35%" r="70%">
      <stop offset="0%" stop-color="#fffbe6" stop-opacity="1"/>
      <stop offset="80%" stop-color="#e4cf88"/>
      <stop offset="100%" stop-color="#c9b16a"/>
    </radialGradient></defs>
    <circle cx="90" cy="90" r="75" fill="url(#grad-venus-big)" />
  </svg>`,
  earth: `<svg class="planet-3d" width="180" height="180" viewBox="0 0 180 180">
    <defs><radialGradient id="grad-earth-big" cx="28%" cy="33%" r="70%">
      <stop offset="0%" stop-color="#fff" stop-opacity="1"/>
      <stop offset="65%" stop-color="#367efa"/>
      <stop offset="100%" stop-color="#19397f"/>
    </radialGradient></defs>
    <circle cx="90" cy="90" r="75" fill="url(#grad-earth-big)" />
  </svg>`,
  mars: `<svg class="planet-3d" width="180" height="180" viewBox="0 0 180 180">
    <defs><radialGradient id="grad-mars-big" cx="34%" cy="34%" r="70%">
      <stop offset="0%" stop-color="#fff8de" stop-opacity="1"/>
      <stop offset="70%" stop-color="#dc5c2b"/>
      <stop offset="100%" stop-color="#8b2c17"/>
    </radialGradient></defs>
    <circle cx="90" cy="90" r="75" fill="url(#grad-mars-big)" />
  </svg>`,
  jupiter: `<svg class="planet-3d" width="220" height="180" viewBox="0 0 220 180">
    <defs><radialGradient id="grad-jupiter-big" cx="35%" cy="35%" r="70%">
      <stop offset="0%" stop-color="#fffbe6" stop-opacity="1"/>
      <stop offset="30%" stop-color="#f8c16c"/>
      <stop offset="70%" stop-color="#b5955a"/>
      <stop offset="100%" stop-color="#aa8657"/>
    </radialGradient></defs>
    <ellipse cx="110" cy="90" rx="90" ry="75" fill="url(#grad-jupiter-big)" />
  </svg>`,
  saturn: `<svg class="planet-3d" width="220" height="180" viewBox="0 0 220 180">
    <defs><radialGradient id="grad-saturn-big" cx="38%" cy="33%" r="70%">
      <stop offset="0%" stop-color="#fffbe6" stop-opacity="1"/>
      <stop offset="60%" stop-color="#f8e7b2"/>
      <stop offset="100%" stop-color="#cbb45a"/>
    </radialGradient></defs>
    <ellipse cx="110" cy="90" rx="72" ry="60" fill="url(#grad-saturn-big)" />
    <ellipse cx="110" cy="118" rx="106" ry="18" fill="#e7d196cc" opacity="0.5"/>
  </svg>`,
  uranus: `<svg class="planet-3d" width="180" height="180" viewBox="0 0 180 180">
    <defs><radialGradient id="grad-uranus-big" cx="36%" cy="33%" r="70%">
      <stop offset="0%" stop-color="#cff" stop-opacity="1"/>
      <stop offset="60%" stop-color="#7be7f9"/>
      <stop offset="100%" stop-color="#44bacb"/>
    </radialGradient></defs>
    <circle cx="90" cy="90" r="75" fill="url(#grad-uranus-big)" />
  </svg>`,
  neptune: `<svg class="planet-3d" width="180" height="180" viewBox="0 0 180 180">
    <defs><radialGradient id="grad-neptune-big" cx="30%" cy="32%" r="70%">
      <stop offset="0%" stop-color="#e1deff" stop-opacity="1"/>
      <stop offset="70%" stop-color="#5777db"/>
      <stop offset="100%" stop-color="#1b2279"/>
    </radialGradient></defs>
    <circle cx="90" cy="90" r="75" fill="url(#grad-neptune-big)" />
  </svg>`,
};

export const planetInfo = {
  mercury: "Меркурий — самая быстрая и ближайшая к Солнцу планета.",
  venus: "Венера — ярчайшая, окутана плотной атмосферой.",
  earth: "Земля — наш дом, с богатой природой и уникальной жизнью.",
  mars: "Марс — 'красная планета', интересна возможностями для колонизации.",
  jupiter: "Юпитер — самый большой, с огромным штормом — Большим Красным пятном.",
  saturn: "Сатурн — известен потрясающими кольцами, газовый гигант.",
  uranus: "Уран — голубоватый ледяной гигант, вращается 'на боку'.",
  neptune: "Нептун — далекий голубой гигант с сильными ветрами.",
};