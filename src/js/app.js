import { settings, select, classNames } from './settings.js';
import Song from './components/Song.js';
import Search from './components/Search.js';
import Discover from './components/Discover.js';
import Home from './components/Home.js';

const app = {
  initHome: function () {
    const thisApp = this;

    thisApp.homeContainer = document.querySelector(select.containerOf.home);

    thisApp.home = new Home(thisApp.homeContainer, thisApp.data.songs);
  },
  initDiscover: function () {
    const thisApp = this;

    thisApp.dicoverContainer = document.querySelector(
      select.containerOf.discover
    );

    thisApp.discover = new Discover(
      thisApp.dicoverContainer,
      thisApp.data.songs
    );
  },
  initSearch: function () {
    const thisApp = this;

    thisApp.searchContainer = document.querySelector(select.containerOf.search);

    thisApp.search = new Search(thisApp.searchContainer, thisApp.data.songs);
  },

  initPages: function () {
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;

    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromhash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if (page.id == idFromhash) {
        pageMatchingHash = page.id;
        break;
      }
    }
    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activatePage(id);

        window.location.hash = '#/' + id;
      });
    }
  },
  activatePage: function (pageId) {
    const thisApp = this;

    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    for (let link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  initPlayers: function () {
    const thisApp = this;

    for (let songData in thisApp.data.songs) {
      new Song(thisApp.data.songs[songData].id, thisApp.data.songs[songData]);
    }
  },

  initData: function () {
    const thisApp = this;

    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.songs;

    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        thisApp.data.songs = parsedResponse;
        thisApp.initHome();
        thisApp.initDiscover();
        thisApp.initSearch();
        thisApp.initPlayers();
      });
  },

  init: function () {
    const thisApp = this;
    thisApp.initPages();
    thisApp.initData();
  },
};

app.init();
