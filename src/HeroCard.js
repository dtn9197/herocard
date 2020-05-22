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

import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';


export class HeroCard extends SimpleColors {

  static get styles() {
    return css`
       
      :host {
        display: block;
        position: relative;
        width: 400px;
        height: 100%;
        background-color: black;
        background-size: cover;
        background-position: center;
        color: white;
      }

      :host * {
        margin: 0px;
      }

      :host([universe="dc"]) {
        border: 5px solid rgb(8, 37, 218 );
      }

      :host([universe="dc"]) #heroimage {
        border-top: 3px solid rgb(31, 142, 175);
        border-bottom: 3px solid rgb(31, 142, 175);
        width: 100%;
      }

      :host([universe="dc"]) hr {
        border-bottom: 3px solid rgb(31, 142, 175);
      }

      :host([universe="dc"]) #header  {
        background-image: url("../demo/assets/background2.jpg");
        background-size: cover;
        background-position: center;
        height: 75px;
      }

      :host([universe="dc"]) #footer  {
        background-image: url("../demo/assets/background2.jpg");
        background-size: cover;
        background-position: center;
        height: 25px;
      }

      :host([universe="marvel"])  {
        border: 5px solid red;
      }

      :host([universe="marvel"]) #header  {
        background-image: url("../demo/assets/marvel1.jpg");
        background-size: cover;
        background-position: center;
        
        height: 75px;
      }

      :host([universe="marvel"]) #footer  {
        background-image: url("../demo/assets/marvel1.jpg");
        background-size: cover;
        background-position: center;
        height: 25px;
      }

      :host([universe="marvel"]) hr  {
        border-bottom: 3px solid rgb(247, 125, 12);
      }

      :host([universe="marvel"]) #heroimage  {
        border-top: 3px solid rgb(247, 125, 12);
        border-bottom: 3px solid rgb(247, 125, 12);
        width: 100%;
      }

      #heroimage {
        border-top: 3px solid rgb(31, 142, 175);
        border-bottom: 3px solid rgb(31, 142, 175);
        width: 100%;
      }
      #heroname {
        text-transform: uppercase;
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        color: rgb(241, 201, 20)
      }

      #type {
        margin: 0px;
        color: rgb(108, 187, 249 );
      }


      #logo {
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
      universe: {type: String},
      type: {type: String}

    };
  }


  constructor() {
    super();
    this.hero = "";
    this.powers = "";
    this.heroimage = "";
    this.universe = "";
    this.type = "";
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
      <section id="header">
          <h1 id="heroname">${this.hero}</h1>
          <img id="logo" src=${logoUsed}>
          <h2 id="type">${this.type}</h2>
      </section>
        <img id ="heroimage" src=${this.heroimage} alt="">

        <section id="content">
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
        </section>
        <section id="footer"></section>
    `;
  }

}



