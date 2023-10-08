const markup = document.createElement("template");

markup.innerHTML = `
  <style>
    h1 {
      font-family: "Mona Sans", sans-serif;
      font-size: large;
      text-align: center; 
    }

    h2 {
      font-family: "Mona Sans", sans-serif;
      font-size: medium;
      text-align: center; 
    }
  </style>
  <header>
    <h1>Daniel Moreno Cruz</h1>
    <h2>@alinedmooner</h2>
  </header>
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
