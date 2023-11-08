const markup = document.createElement("template");

markup.innerHTML = `
  <style>
    :host {
      color: blue;
      background: black;
      width: 100vw;
      height: 100vh;
      display: block;
      margin: 0;
      padding: 0;
      
    }
  </style>
    <h1>Minimal CV</h1>
`;

class MinimalCv extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  play() {
    this.shadowRoot.appendChild(markup.content.cloneNode(true));
  }

  connectedCallback() {
    this.play();
  }
}

customElements.define("minimal-cv", MinimalCv);
