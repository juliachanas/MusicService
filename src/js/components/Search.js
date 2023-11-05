import { templates, select } from '../settings.js';
// import utils from '../utils.js';

class Search {
  constructor(searchContainer, songs) {
    const thisSearch = this;

    thisSearch.searchContainer = searchContainer;
    console.log('searchContainer:', searchContainer);

    thisSearch.songs = songs;
    console.log('thisSearch.songs:', thisSearch.songs);

    thisSearch.filteredsongs = [];
    console.log('thisSearch.filteredsongs:', thisSearch.filteredsongs);

    thisSearch.render(searchContainer);
    thisSearch.getElements();
  }

  render(searchContainer) {
    const thisSearch = this;

    thisSearch.container = searchContainer;

    /*generowanie kodu HTML za pomocą szablonu */
    const generatedHTML = templates.search();

    thisSearch.searchContainer.innerHTML = generatedHTML;
  }

  getElements() {
    const thisSearch = this;
    console.log('****starting getElements****');

    thisSearch.input = thisSearch.searchContainer.querySelector(
      select.search.input
    );
    console.log('input', thisSearch.input);

    thisSearch.results = thisSearch.searchContainer.querySelector(
      select.search.result
    );
    console.log('results', thisSearch.results);

    thisSearch.button = thisSearch.searchContainer.querySelector(
      select.search.button
    );
    console.log('button', thisSearch.button);
  }
}

export default Search;
