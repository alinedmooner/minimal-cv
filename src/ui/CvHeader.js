const markup = document.createElement("template");

markup.innerHTML = `
  <style>
    h1 {
      color: #f1efef;
      background: #272829;
      font-family: "Mona Sans", sans-serif;
      font-size: large;
      text-align: center; 
    }
  </style>
  <header>
    <h1>Daniel Moreno Cruz</h1>
  </header>
`;

class CvHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.play();
  }

  play() {
    this.shadowRoot.appendChild(markup.content.cloneNode(true));
  }
}

customElements.define("cv-header", CvHeader);
