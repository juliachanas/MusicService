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
  },
  containerOf: {
    pages: '#pages',
    songs: '#player',
  },
  nav: {
    links: '.main-nav a',
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
};
