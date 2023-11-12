import styles from "./MinimalCV.css?inline";

class MinimalCV extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return styles;
  }

  play() {
    this.shadowRoot.appendChild(markup.content.cloneNode(true));
  }

  connectedCallback() {
    this.play();
  }
}

const markup = document.createElement("template");

markup.innerHTML = `
<style>${MinimalCV.styles}</style>
  <div>
  <header>
    <h1 translate="no">alinedmooner</h1>
  </header>
  <main>
    <section>
      <h2>Who am I?</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem numquam deserunt et corrupti officiis non veniam eaque amet ratione tempore, libero accusantium quisquam, veritatis aliquid minus odio sequi, enim in sint! Ipsa nostrum nam maxime ut similique repellendus assumenda et, vero eaque, eligendi dolore ducimus nulla officiis, deserunt illo dolor! Vel sit quo rem tempora?</p>
    </section>
    <section>
      <h2>My Projects (Quizlympic)</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, officia fugit facere reprehenderit ducimus id itaque sequi? Aut architecto alias dicta voluptatem dignissimos sed ipsam? Pariatur ullam vel rem ducimus fugit placeat ab nostrum ut fuga ea? Provident nihil cupiditate consequatur quibusdam? Exercitationem dolore saepe, maiores, sed vero deleniti, officia temporibus amet necessitatibus nesciunt veniam!</p>
    </section>
    <section>
      <h2>My Education</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequuntur ullam animi molestiae sint repellat eveniet adipisci impedit quis iure voluptatibus incidunt numquam quo ad ipsam, culpa labore excepturi sapiente nam consequatur? Rem quidem a aperiam. Sequi molestiae, placeat quae cum sunt veritatis laboriosam. Quidem odio at officiis! Nostrum cum sed vero! Tempore, quaerat quos.</p>
    </section>
  </main>
  <footer>Watch more of my educational content in Youtube and Twitch</footer>
</div>
`;

customElements.define("minimal-cv", MinimalCV);
