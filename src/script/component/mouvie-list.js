import './mouvie-item.js';

class MouvieList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set mouvies(mouvies) {
    this._mouvies = mouvies;
    this.render();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
    <style>
    .placeholder {
      font-weight: lighter;
      color: rgba(0, 0, 0, 0.5);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }    
    </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.shadowDOM.innerHTML = '';
    this._mouvies.forEach((mouvie) => {
      const mouvieItemElement = document.createElement('mouvie-item');
      mouvieItemElement.mouvie = mouvie;

      this.shadowDOM.appendChild(mouvieItemElement);
    });
  }
}
customElements.define('mouvie-list', MouvieList);
