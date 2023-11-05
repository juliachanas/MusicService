import { templates } from '../settings.js';

class Discover {
  constructor(discoverContainer, songs) {
    const thisDiscover = this;

    thisDiscover.discoverContainer = discoverContainer;
    console.log('discoverContainer:', thisDiscover.discoverContainer);

    thisDiscover.songs = songs;
    console.log('thisDiscover.songs:', thisDiscover.songs);

    thisDiscover.render(discoverContainer);
  }
  render(discoverContainer) {
    const thisDiscover = this;

    thisDiscover.container = discoverContainer;

    /*generowanie kodu HTML za pomocą szablonu */
    const generatedHTML = templates.discover();

    thisDiscover.container.innerHTML = generatedHTML;

    thisDiscover.randomSong();
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
}

export default Discover;
