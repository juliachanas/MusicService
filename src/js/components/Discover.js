import { templates, select } from '../settings.js';
import Song from './Song.js';

class Discover {
  constructor(discoverContainer, songs) {
    const thisDiscover = this;

    thisDiscover.discoverContainer = discoverContainer;
    console.log('discoverContainer:', thisDiscover.discoverContainer);

    thisDiscover.songs = songs;
    // console.log('thisDiscover.songs:', thisDiscover.songs);

    thisDiscover.render(discoverContainer);
    thisDiscover.getElements();

    //Sprawdzam, czy piosenka nie została już wylosowana i jeśli nie, to losujemy i wyświetlamy
    if (!thisDiscover.randomSongIndex) {
      thisDiscover.randomSong();
      thisDiscover.renderRandomSong();
    }
  }
  render(discoverContainer) {
    const thisDiscover = this;

    thisDiscover.container = discoverContainer;

    /*generowanie kodu HTML za pomocą szablonu */
    const generatedHTML = templates.discover();
    thisDiscover.container.innerHTML = generatedHTML;
  }
  getElements() {
    const thisDiscover = this;

    thisDiscover.randomResult = thisDiscover.discoverContainer.querySelector(
      select.discover.result
    );
    //console.log('randomResult', thisDiscover.randomResult);
  }

  randomSong() {
    const thisDiscover = this;

    //losujemy index piosenki - math.random losuje liczby od 0-1, mnożę przez ilośc piosenek w tablicy(lenght) - zeby otrzymać zakres <0,4) i zaokrąglam w dół funckją math.floor
    thisDiscover.randomSongIndex = Math.floor(
      Math.random() * thisDiscover.songs.length
    );
    console.log('wylosowany index piosenki: ', thisDiscover.randomSongIndex);

    //sprawdzam jaka piosenka kryje się pod wylosowanym indeksem
    thisDiscover.randomSong = thisDiscover.songs[thisDiscover.randomSongIndex];
    console.log('wylosowana losowa piosenka:', thisDiscover.randomSong);
  }

  renderRandomSong() {
    const thisDiscover = this;

    //teraz mam tylko jedną piosenkę, tylko tę wylosowaną
    const song = new Song(
      `discover-${thisDiscover.randomSong.id}`,
      thisDiscover.randomSong
    );
    console.log('discover song:', song);
    thisDiscover.randomResult.appendChild(song.element);
  }
}

export default Discover;
