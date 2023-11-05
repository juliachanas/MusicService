export const settings = {
  db: {
    url:
      '//' +
      window.location.hostname +
      (window.location.hostname == 'localhost' ? ':3131' : ''),
    songs: 'songs',
  },
};
export const select = {
  templateOf: {
    song: '#template-song-player',
    search: '#template-search',
  },
  containerOf: {
    pages: '#pages',
    songs: '#player',
    search: '.search-wrapper',
  },
  nav: {
    links: '.main-nav a',
  },
  search: {
    result: '.result-audio-wrapper',
    button: '.search-button',
    input: 'input',
  },
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
};

export const templates = {
  song: Handlebars.compile(
    document.querySelector(select.templateOf.song).innerHTML
  ),
  search: Handlebars.compile(
    document.querySelector(select.templateOf.search).innerHTML
  ),
};
