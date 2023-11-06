import { templates, select } from '../settings.js';
// import utils from '../utils.js';
import Song from './Song.js';

class Search {
  constructor(searchContainer, songs) {
    const thisSearch = this;

    thisSearch.searchContainer = searchContainer;
    // console.log('searchContainer:', searchContainer);

    thisSearch.songs = songs;
    // console.log('thisSearch.songs:', thisSearch.songs);

    thisSearch.filteredSongs = [];
    // console.log('thisSearch.filteredSongs:', thisSearch.filteredSongs);

    thisSearch.render(searchContainer);
    thisSearch.getElements();
    thisSearch.initActions();
  }

  render(searchContainer) {
    const thisSearch = this;

    thisSearch.container = searchContainer;

    /*generowanie kodu HTML za pomocą szablonu */
    const generatedHTML = templates.search();

    thisSearch.container.innerHTML = generatedHTML;
  }

  getElements() {
    const thisSearch = this;
    //console.log('****starting getElements****');

    thisSearch.input = thisSearch.searchContainer.querySelector(
      select.search.input
    );
    // console.log('input', thisSearch.input);

    thisSearch.results = thisSearch.searchContainer.querySelector(
      select.search.result
    );
    //console.log('results', thisSearch.results);

    thisSearch.button = thisSearch.searchContainer.querySelector(
      select.search.button
    );
    // console.log('button', thisSearch.button);
  }

  initActions() {
    const thisSearch = this;
    // console.log('****starting initActions****');

    thisSearch.button.addEventListener('click', function (event) {
      event.preventDefault();

      thisSearch.filterSongs(thisSearch.input.value);
      //   thisSearch.renderSongs();
    });
  }

  filterSongs(searchInputString) {
    const thisSearch = this;

    thisSearch.filteredSongs = thisSearch.songs.filter(
      (song) =>
        song.title.toLowerCase().includes(searchInputString.toLowerCase()) ||
        song.author.toLowerCase().includes(searchInputString.toLowerCase())
    );
    // console.log('thisSearch.filteredSongs', thisSearch.filteredSongs);

    thisSearch.renderFilteredSongs();
  }

  renderFilteredSongs() {
    const thisSearch = this;
    // console.log('*****starting renderFilteredSongs');

    // console.log(
    //   'thisSearch.filteredSongs in filtered songs',
    //   thisSearch.filteredSongs
    // );

    thisSearch.results.innerHTML = '';

    for (let songData of thisSearch.filteredSongs) {
      const song = new Song(`search-${songData.id}`, songData); // <div id="song-search-1"

      //console.log('song', song);
      thisSearch.results.appendChild(song.element);
    }
  }
}

export default Search;
