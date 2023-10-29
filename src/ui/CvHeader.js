const markup = document.createElement("template");

markup.innerHTML = `
  <style>

  </style>
    <h1>Minimal CV</h1>
`;

class CvHeader extends HTMLElement {
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

customElements.define("cv-header", CvHeader);
