import styles from './CvHead.css?inline'

class CvHead extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get styles (): string {
    return styles
  }

  play () {
    this.shadowRoot.appendChild(markup.content.cloneNode(true))
  }

  connectedCallback (): void {
    this.play()
  }
}

const markup = document.createElement('template')

markup.innerHTML = `
<style>${CvHead.styles}</style>

`

customElements.define('cv-head', CvHead)
