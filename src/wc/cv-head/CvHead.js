import styles from './CvHead.css?inline'

class CvHead extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get styles () {
    return styles
  }

  inject () {
    this.shadowRoot.appendChild(markup.content.cloneNode(true))
  }

  connectedCallback () {
    this.inject()
  }
}

const markup = document.createElement('template')

markup.innerHTML = `
<style>${CvHead.styles}</style>
<h1>Daniel Moreno</h1>
<h2>@alinedmooner</h2>
<section>
  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint fuga ab harum debitis.</p>
  </div> 
  <a href="">Watch Projects 👀</a>
</section>

`

customElements.define('cv-head', CvHead)
