class MouvieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set mouvie(mouvie) {
    this._mouvie = mouvie;
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
        margin-bottom: 18px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow: hidden;
      }
      
      .card-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* 3 elemen per baris */
        gap: 24px;
        justify-items: center;
      }
      
      .fan-art-mouvie {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: center;
        display: block; 
        margin: auto;
        padding: 10px;
      }
      
      .mouvie-info {
        padding: 14px;
        text-align: center;
      }
      
      .mouvie-info > h2 {
        font-weight: lighter;
      }
      
      .mouvie-info > p {
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 10; /* number of lines to show */
      }
      </style>
      
      <div class="card-container">
      <img class="fan-art-mouvie" src="${this._mouvie.Poster}" alt="Fan Art">
      <div class="mouvie-info">
        <h2>${this._mouvie.Title}</h2>
        <p>${this._mouvie.Year}</p>
      </div>
      </div>
      `;
  }
}

customElements.define("mouvie-item", MouvieItem);
