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
  }
}

export default Discover;
