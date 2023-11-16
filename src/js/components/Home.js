import { select, templates } from '../settings.js';

class Home {
  constructor(homeContainer, songs) {
    const thisHome = this;

    thisHome.homeContainer = homeContainer;

    thisHome.songs = songs;

    thisHome.getElements();
    thisHome.generateCategoryLinks();
  }

  getElements() {
    const thisHome = this;

    thisHome.categories = thisHome.homeContainer.querySelector(
      select.home.categories
    );
  }

  generateCategoryLinks() {
    const thisHome = this;

    let allCategories = [];

    let html = '';

    thisHome.songs.forEach((song) => {
      song.categories.forEach((category) => {
        if (!allCategories.includes(category)) {
          allCategories.push(category);
        }
      });
    });

    for (let category of allCategories) {
      const linkHTMLData = { category };
      const linkHTML = templates.categoryLink(linkHTMLData);
      console.log(linkHTML);
      html = html + linkHTML;
    }
    thisHome.categories.innerHTML = html;
    thisHome.addClickListenersToCategory();
  }

  addClickListenersToCategory() {
    const thisHome = this;

    thisHome.links = document.querySelectorAll('[href^="#category-"]');
    console.log('thisHome.links', thisHome.links);

    for (let link of thisHome.links) {
      link.addEventListener('click', function (event) {
        thisHome.event = event.preventDefault();
      });
    }
  }
}

export default Home;
