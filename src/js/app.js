import { settings, select, classNames } from './settings.js';
import Song from './components/Song.js';
import Search from './components/Search.js';
import Discover from './components/Discover.js';
import Home from './components/Home.js';

const app = {
  initHome: function () {
    console.log('****STARTING INIT HOME***');

    const thisApp = this;

    thisApp.homeContainer = document.querySelector(select.containerOf.home);

    thisApp.home = new Home(thisApp.homeContainer, thisApp.data.songs);
  },
  initDiscover: function () {
    //console.log('****STARTING INIT DISCOVER****');

    const thisApp = this;
    //console.log('thisApp.data.songs ', thisApp.data.songs);

    thisApp.dicoverContainer = document.querySelector(
      select.containerOf.discover
    );

    thisApp.discover = new Discover(
      thisApp.dicoverContainer,
      thisApp.data.songs
    );
  },
  initSearch: function () {
    // console.log('----starting - InitSearch----');
    const thisApp = this;
    // console.log('thisApp.data.songs ', thisApp.data.songs);

    thisApp.searchContainer = document.querySelector(select.containerOf.search);

    thisApp.search = new Search(thisApp.searchContainer, thisApp.data.songs);
  },

  initPages: function () {
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    // console.log(thisApp.pages);

    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    // console.log(thisApp.navLinks);

    const idFromhash = window.location.hash.replace('#/', '');
    // console.log(idFromhash);

    let pageMatchingHash = thisApp.pages[0].id;
    // console.log('page', pageMatchingHash);

    for (let page of thisApp.pages) {
      if (page.id == idFromhash) {
        pageMatchingHash = page.id;
        break;
      }
    }
    thisApp.activatePage(pageMatchingHash); // zeby przy odswiezaniu nie wracala do poprzejdniej podstrony

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        /* get page id from href attribute */
        //w stalej id chcemy zapisac atrybut href kliknietego eleementu, w ktorym zamienimy # na pusty ciag znakow
        const id = clickedElement.getAttribute('href').replace('#', '');
        // console.log('id', id);

        /*run this App.activatePage with that id*/
        thisApp.activatePage(id);

        /* change url hash */
        window.location.hash = '#/' + id;
      });
    }
  },
  activatePage: function (pageId) {
    const thisApp = this;

    /* add class "active" to matching pages, remove from non-matching */
    for (let page of thisApp.pages) {
      // nadaje klase podana jako pierwszy argument jesli jej nie było i odbiera kied ejst
      //drugi argument kontroluje czy klasa ma zostac nadana czy tez nie!!
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    /* add class "active" to matching links, remove from non-matching */
    for (let link of thisApp.navLinks) {
      //dla kazdego z linkow zapisanych w thisApp.navLinks dodaj lub usun klase w className.nav.active w zaleznosci od tego czy atrybut href tego linka jest rowny "#" oraz id podstrony podanej jako argument axctive page
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  initPlayers: function () {
    // console.log('starting');
    const thisApp = this;

    // console.log('thisApp.data.songs ', thisApp.data.songs);

    for (let songData in thisApp.data.songs) {
      new Song(thisApp.data.songs[songData].id, thisApp.data.songs[songData]);
      // console.log(
      //   'Song: ',
      //   thisApp.data.songs[songData].id,
      //   thisApp.data.songs[songData]
      // );
    }
  },

  initData: function () {
    const thisApp = this;

    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.songs;
    // console.log(url);

    fetch(url) /* polacz sie z url*/
      .then(function (rawResponse) {
        return rawResponse.json(); /*przekonwertuj na plik json */
      })
      .then(function (parsedResponse) {
        // console.log(
        //   'parsedResponse',
        //   parsedResponse
        // ); /*pokaz skonwertowane dane w konsoli*/

        /* save parsedResponse at this.App.data.songs */
        thisApp.data.songs = parsedResponse;
        //console.log('thisApp.data.songs', thisApp.data.songs);
        /* execute initMenu method */
        thisApp.initHome();
        thisApp.initDiscover();
        thisApp.initSearch();
        thisApp.initPlayers();
      });

    // console.log('thisApp.data', JSON.stringify(thisApp.data));
  },

  init: function () {
    const thisApp = this;
    //thisApp.initSearch();
    thisApp.initPages();
    thisApp.initData();
  },
};

app.init();
