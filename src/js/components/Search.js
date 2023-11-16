import { templates, select } from '../settings.js';
import Song from './Song.js';

class Search {
  constructor(searchContainer, songs) {
    const thisSearch = this;

    thisSearch.searchContainer = searchContainer;

    thisSearch.songs = songs;

    thisSearch.filteredSongs = [];

    thisSearch.render(searchContainer);
    thisSearch.getElements();
    thisSearch.initActions();
    thisSearch.changeTextToUpperCase();
  }

  render(searchContainer) {
    const thisSearch = this;

    thisSearch.container = searchContainer;

    const generatedHTML = templates.search();

    thisSearch.container.innerHTML = generatedHTML;
  }

  getElements() {
    const thisSearch = this;

    thisSearch.input = thisSearch.searchContainer.querySelector(
      select.search.input
    );

    thisSearch.results = thisSearch.searchContainer.querySelector(
      select.search.result
    );

    thisSearch.button = thisSearch.searchContainer.querySelector(
      select.search.button
    );

    thisSearch.amount = thisSearch.searchContainer.querySelector(
      select.search.amount
    );

    thisSearch.title = thisSearch.searchContainer.querySelector('.title h2');
  }

  initActions() {
    const thisSearch = this;

    thisSearch.button.addEventListener('click', function (event) {
      event.preventDefault();

      thisSearch.filterSongs(thisSearch.input.value);
    });
  }

  filterSongs(searchInputString) {
    const thisSearch = this;

    thisSearch.filteredSongs = thisSearch.songs.filter(
      (song) =>
        song.title.toLowerCase().includes(searchInputString.toLowerCase()) ||
        song.author.toLowerCase().includes(searchInputString.toLowerCase())
    );
    const filteredSongsLength = thisSearch.filteredSongs.length;

    thisSearch.amount.textContent = `We have found ${filteredSongsLength} songs...`;

    thisSearch.renderFilteredSongs();
  }

  renderFilteredSongs() {
    const thisSearch = this;

    thisSearch.results.innerHTML = '';

    for (let songData of thisSearch.filteredSongs) {
      const song = new Song(`search-${songData.id}`, songData);

      thisSearch.results.appendChild(song.element);
    }
  }
  changeTextToUpperCase() {
    const thisSearch = this;

    if ((thisSearch.title, thisSearch.button)) {
      thisSearch.title.textContent = thisSearch.title.textContent.toUpperCase();
      thisSearch.button.textContent =
        thisSearch.button.textContent.toUpperCase();
    }
  }
}

export default Search;
