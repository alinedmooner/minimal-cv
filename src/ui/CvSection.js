const markup = document.createElement("template");

markup.innerHTML = `
  <style>
  .main-container {
      width: 500px;
      height: 800px;
      border: dashed red;
    }
  </style>
  <div class="main-container">
  Contenedor principal
  </div>
`;

class CvSection extends HTMLElement {
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

customElements.define("cv-section", CvSection);
