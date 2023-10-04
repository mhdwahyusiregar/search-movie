import '../component/mouvie-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const mouvieListElement = document.querySelector('mouvie-List');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMouvie(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    mouvieListElement.mouvies = results;
  };

  const fallbackResult = (message) => {
    mouvieListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
