import createMainPage from './mainPage.js';

const url = window.location.href;

console.log(createMainPage);
function getPages() {
  switch (url) {
    case 'http://localhost:4000/':
      createMainPage();
      break;
  }
}

getPages();
