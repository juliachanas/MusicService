import { settings, select, classNames } from './settings.js';

const app = {
  initPages: function () {
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromhash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;
    console.log(pageMatchingHash);

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
  initData: function () {
    const url = settings.db.url + '/' + settings.db.songs;
    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.songs = parsedResponse;
      });
  },

  init: function () {
    const thisApp = this;
    thisApp.initData();

    GreenAudioPlayer.init({
      selector: '.player', // inits Green Audio Player on each audio container that has class "player"
      stopOthersOnPlay: true,
    });
  },
};

app.init();
