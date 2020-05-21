import { LitElement, html, css } from 'lit-element';

class MyElement extends LitElement {
  static get styles() {
    return css`
      /* Selects the host */
      :host { 
        display: block; 
        width: 400px;
      }

      /* Selects the host element if it is hidden */
      :host([hidden]) { 
        display: none; 
      }

      /* Selects the host element if it has class "blue" */
      :host(.blue) { 
        background-color: aliceblue;
        color: blue;
        width: 800px;
      }

      :host(.blue) p {
          color: red;
      }
    `;
  }
  render() {
    return html`
      <p>Hello World</p>
    `;
  }
}

customElements.define('my-element', MyElement);
