const title = document.getElementById('title');
title.textContent = title.textContent.toUpperCase();

const subtitle = document.getElementById('sub-title');
subtitle.innerHTML = subtitle.innerHTML
  .split('<br>')
  .map((line) => line.toUpperCase())
  .join('<br>');

const navLinks = document.querySelectorAll('.main-nav a');

navLinks.forEach((link) => {
  link.textContent = link.textContent.toUpperCase();
});

const SubscribeTitle = document.querySelector('.sub-title h2');
const spanElement = SubscribeTitle.querySelector('span');

const spanText = spanElement.textContent.toUpperCase();

SubscribeTitle.removeChild(spanElement);

SubscribeTitle.textContent = SubscribeTitle.textContent.toUpperCase();

SubscribeTitle.innerHTML += ' <span>' + spanText + '</span>';

const buttonJoin = document.querySelector('.btn');
buttonJoin.textContent = buttonJoin.textContent.toUpperCase();

const nameElement = document.querySelector('.name p');

nameElement.textContent =
  nameElement.textContent.charAt(0).toUpperCase() +
  nameElement.textContent.slice(1).toLowerCase();

const surnameElement = document.querySelector('.surname p');

const surnameText = surnameElement.textContent;
const firstLetter = surnameText.charAt(0).toUpperCase();
const restOfSurname = surnameText.slice(1, -3).toLowerCase();
const lastThreeLetters = surnameText.slice(-3);

surnameElement.innerHTML =
  firstLetter + restOfSurname + '<span>' + lastThreeLetters + '</span>';

const newAlbum = document.querySelector('.new-album p');
newAlbum.textContent = newAlbum.textContent.toUpperCase();

const availability = document.querySelector('.availability p');

const text = availability.textContent;

if (text.length > 0) {
  const firstLetter = text[0].toUpperCase();
  const restOfText = text.slice(1).toLowerCase();
  availability.textContent = firstLetter + restOfText;
}
