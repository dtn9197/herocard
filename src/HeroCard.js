/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {LitElement, html, css} from 'lit-element';


export class HeroCard extends LitElement {

  static get styles() {
    return css`
        .hero-card {
        border: 2px solid red;
        width: 400px;
        height: 100%;
      }

      img {
        width: 100%;
      }

      .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
      }
    `;
  }

  static get properties() {
    return {
      hero: {type: String},
      powers: {type: String},
      image: {type: String}

    };
  }


  constructor() {
    super();
    this.hero = "";
    this.powers = "";
    this.image = "";
  }

  render() {
    var powers = this.powers.split(",");
    return html`
     <div class="hero-card">
      <h1>${this.hero}<h1>
        <hr>
        <img src=${this.image} alt="">
        <h2>Description</h2>
        <hr>
        <slot name="description">

        </slot>
        <h2>Powers</h2>
        <hr>
        <ul>
          <div class="grid-container">
            ${powers.map(power => 
              html`<li class="grid-item"> ${power} </li>`
              )}
          </div>
        </ul>
    </div>
    `;
  }

}



