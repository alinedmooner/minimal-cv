const markup = document.createElement("template");

markup.innerHTML = `
  <style>
    h2, p {
      color: white;
    }
  </style>
  <section>
    <h2>Título</h2>
    <p>Descripción</p>
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
