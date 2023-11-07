import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Song {
  constructor(id, data) {
    const thisSong = this;

    thisSong.id = id;
    thisSong.data = data;
    thisSong.renderInMenu();
    // thisSong.changeTextToUpperCase();
  }
  // tworzenie elementu HTML na podstawie szablonu i dodanie na stronę
  renderInMenu() {
    const thisSong = this;

    const generatedHTML = templates.song({ ...thisSong.data, id: thisSong.id });

    thisSong.element = utils.createDOMFromHTML(generatedHTML);

    const songContainer = document.querySelector(select.containerOf.songs);

    songContainer.appendChild(thisSong.element);

    GreenAudioPlayer.init({
      selector: `#song-${thisSong.id}`, // inits Green Audio Player on each audio container that has class "player"
      stopOthersOnPlay: true,
    });
  }
  // changeTextToUpperCase() {
  //   const thisSong = this;

  //   // Znajdź element wewnątrz audio playera, który zawiera tekst
  //   const textElement = thisSong.element.querySelector('.song-description h3');

  //   if (textElement) {
  //     // Ustaw tekst na wielkie litery
  //     textElement.textContent = textElement.textContent.toUpperCase();
  //   }
  // }
}

export default Song;
