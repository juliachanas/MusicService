/*HEADER - titles - FONTS*/

let title = document.getElementById('title');
title.textContent = title.textContent.toUpperCase();

let subtitle = document.getElementById('sub-title');
subtitle.innerHTML = subtitle.innerHTML
  .split('<br>')
  .map((line) => line.toUpperCase())
  .join('<br>');

/*MENU - NAV*/

// Pobierz wszystkie linki w elemencie o klasie "main-nav"
let navLinks = document.querySelectorAll('.main-nav a');

// Iteruję przez linki i zmień tekst na duże litery
navLinks.forEach((link) => {
  link.textContent = link.textContent.toUpperCase();
});

/*SUBSCRIBE SECTION*/

//TITLE

const SubscribeTitle = document.querySelector('.sub-title h2');
const spanElement = SubscribeTitle.querySelector('span');

// Pobierz zawartość tekstu w elemencie span
const spanText = spanElement.textContent.toUpperCase();

// Usuń element span z h2
SubscribeTitle.removeChild(spanElement);

// SubscribeTitle na wielkie litery
SubscribeTitle.textContent = SubscribeTitle.textContent.toUpperCase();

// Połącz zawartość SubscribeTitle z elementem spanem
SubscribeTitle.innerHTML += ' <span>' + spanText + '</span>';

//BUTTON JOIN NOW
const buttonJoin = document.querySelector('.btn');
buttonJoin.textContent = buttonJoin.textContent.toUpperCase();

//AUTHOR NAME AND SURNAME
const nameElement = document.querySelector('.name p');

// Zmiana pierwszej litery na wielką i reszty na małe litery w imieniu
nameElement.textContent =
  nameElement.textContent.charAt(0).toUpperCase() +
  nameElement.textContent.slice(1).toLowerCase();

// Zmiana pierwszej litery na wielką i reszty na małe litery w nazwisku
const surnameElement = document.querySelector('.surname p');

// Zmiana pierwszej litery na wielką i reszty na małe litery w nazwisku
const surnameText = surnameElement.textContent;
const firstLetter = surnameText.charAt(0).toUpperCase();
const restOfSurname = surnameText.slice(1, -3).toLowerCase(); // Wyłączając ostatnie trzy litery
const lastThreeLetters = surnameText.slice(-3); // Ostatnie trzy litery

surnameElement.innerHTML =
  firstLetter + restOfSurname + '<span>' + lastThreeLetters + '</span>';

//NEW ALBUM

const newAlbum = document.querySelector('.new-album p');
newAlbum.textContent = newAlbum.textContent.toUpperCase();

//AVAIABILITY

const availability = document.querySelector('.availability p');

const text = availability.textContent;

if (text.length > 0) {
  const firstLetter = text[0].toUpperCase();
  const restOfText = text.slice(1).toLowerCase();
  availability.textContent = firstLetter + restOfText;
}
