class CvHeader extends HTMLElement {
  constructor() {
    super();
    console.log("Header.");
  }
}

customElements.define("cv-header", CvHeader);
