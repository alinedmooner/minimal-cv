const markup = document.createElement("template");

markup.innerHTML = `
  <style>

  </style>
  <section>
    Hola
  </section>
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
