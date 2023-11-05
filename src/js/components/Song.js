import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Song {
  constructor(id, data) {
    const thisSong = this;

    thisSong.id = id;
    thisSong.data = data;
    thisSong.renderInMenu();
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
}

export default Song;
