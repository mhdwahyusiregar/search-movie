class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :host {
      display: block;
      width: 100%;
      background-color: #332C39;
      color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      position: fixed;
    top: 0;
    left: 0;
    }
    h2 {
      padding: 16px;
    }
    </style>

    <h2>Search Movie</h2>`;
  }
}

customElements.define('app-bar', AppBar);
