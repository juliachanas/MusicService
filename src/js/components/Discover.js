import { templates, select } from '../settings.js';
import Song from './Song.js';

class Discover {
  constructor(discoverContainer, songs) {
    const thisDiscover = this;

    thisDiscover.discoverContainer = discoverContainer;

    thisDiscover.songs = songs;

    thisDiscover.render(discoverContainer);
    thisDiscover.getElements();
    thisDiscover.changeTextToUpperCase();

    if (!thisDiscover.randomSongIndex) {
      thisDiscover.randomSong();
      thisDiscover.renderRandomSong();
    }
  }
  render(discoverContainer) {
    const thisDiscover = this;

    thisDiscover.container = discoverContainer;

    const generatedHTML = templates.discover();
    thisDiscover.container.innerHTML = generatedHTML;
  }
  getElements() {
    const thisDiscover = this;

    thisDiscover.randomResult = thisDiscover.discoverContainer.querySelector(
      select.discover.result
    );

    thisDiscover.title =
      thisDiscover.discoverContainer.querySelector('.title h2');
  }

  randomSong() {
    const thisDiscover = this;

    thisDiscover.randomSongIndex = Math.floor(
      Math.random() * thisDiscover.songs.length
    );

    thisDiscover.randomSong = thisDiscover.songs[thisDiscover.randomSongIndex];
  }

  renderRandomSong() {
    const thisDiscover = this;

    const song = new Song(
      `discover-${thisDiscover.randomSong.id}`,
      thisDiscover.randomSong
    );
    thisDiscover.randomResult.appendChild(song.element);
  }
  changeTextToUpperCase() {
    const thisDiscover = this;

    if (thisDiscover.title) {
      thisDiscover.title.textContent =
        thisDiscover.title.textContent.toUpperCase();
    }
  }
}

export default Discover;
