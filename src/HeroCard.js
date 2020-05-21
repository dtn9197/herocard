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
        position: relative;
        border: 2px solid red;
        width: 400px;
        height: 100%;
        background-color: brown;
      }

      img {
        width: 100%;
      }

      #logo {
        display: inline;
        width: 50px;
        position: absolute;
        right: 0px;
        
      }
      h1 {
        display: inline
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
      heroimage: {type: String},
      universe: {type: String}

    };
  }


  constructor() {
    super();
    this.hero = "";
    this.powers = "";
    this.heroimage = "";
    this.universe = "";
  }

  render() {
    var powers = this.powers.split(",");
    var universe = this.universe.toLowerCase();
    var logoUsed;
    if(universe == "dc")
      logoUsed = "assets/dclogo.jpg";
    else if(universe == "marvel")
      logoUsed = "assets/marvellogo.jpg";
      
    
    return html`
     <div class="hero-card">
      <h1>${this.hero}<h1><img id="logo" src=${logoUsed}>
        <hr>
        <img id ="heroimage" src=${this.heroimage} alt="">
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



