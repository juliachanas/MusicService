//HEADER - titles - FONTS

let title = document.getElementById('title');
title.textContent = title.textContent.toUpperCase();
title.style.letterSpacing = '92px';
title.style.fontSize = '190px';

let subtitle = document.getElementById('sub-title');
subtitle.innerHTML = subtitle.innerHTML
  .split('<br>')
  .map((line) => line.toUpperCase())
  .join('<br>');

//MENU - NAV

// Pobierz wszystkie linki w elemencie o klasie "main-nav"
let navLinks = document.querySelectorAll('.main-nav a');

// Iteruj przez linki i zmień tekst na duże litery
navLinks.forEach((link) => {
  link.textContent = link.textContent.toUpperCase();
});

// let title1 = document.getElementById('title-1');
// title1.textContent = title1.textContent.toUpperCase();
