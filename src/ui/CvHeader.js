class CvHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.play();
  }

  play() {
    this.shadowRoot.appendChild(markup.content.cloneNode(true));
  }
}

const markup = document.createElement("template");

markup.innerHTML = `
  <style>
  p {
    color: green;
    background-color: black;
    padding: 3rem;
    font-size: large;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: system-ui, -apple-system;
  }
  </style>
  <div>
    <p>Hola, soy ManzComponent</p>
  </div>
`;

customElements.define("cv-header", CvHeader);
