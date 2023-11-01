import { settings } from './settings';

const app = {
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
  },
};

app.init();
