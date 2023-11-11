import { select, templates } from '../settings.js';

class Home {
  constructor(homeContainer, songs) {
    const thisHome = this;

    thisHome.homeContainer = homeContainer;
    console.log('thisHomeContainer', thisHome.homeContainer);

    thisHome.songs = songs;
    console.log('thisHome.songs:', thisHome.songs);

    thisHome.getElements();
    thisHome.generateCategoryLinks();
  }

  getElements() {
    const thisHome = this;

    thisHome.categories = thisHome.homeContainer.querySelector(
      select.home.categories
    );
    console.log('categories', thisHome.categories);
  }

  generateCategoryLinks() {
    const thisHome = this;

    let allCategories = [];

    // Iteruję przez piosenki i dodaję kategorie do tablicy
    thisHome.songs.forEach((song) => {
      song.categories.forEach((category) => {
        if (!allCategories.includes(category)) {
          allCategories.push(category);
        }
      });
    });
    console.log('allCategories: ', allCategories);

    //Dla każdej kategorii z tablicy dodaję linka, używając handlebarsa
    for (let category of allCategories) {
      const linkHTMLData = { category };
      const linkHTML = templates.categoryLink(linkHTMLData);
      console.log(linkHTML);
    }
  }
}

export default Home;
