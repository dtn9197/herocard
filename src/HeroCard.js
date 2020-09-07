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
        width: 250px;
        height: auto;
        background-color: var(--hero-card-description-background-color,var(--simple-colors-default-theme-accent-12, #000000));
        background-size: cover;
        background-position: center;
        color: var(--simple-colors-default-theme-grey-1, #FFFFFF);
        text-shadow: var(--hero-card-text-shadow);
        font-size: 0.9rem;
        border: 5px solid var(--hero-card-border, var(--simple-colors-default-theme-accent-4, #FFFFFF));
      }

      #header {
        height: 50px;
      }

      #footer {
        height: 25px;
      }

      :host ::slotted(img) {
        border-top: 3px solid var(--hero-card-border, var(--simple-colors-default-theme-accent-5, #FFFFFF));
        border-bottom: 3px solid var(--hero-card-border, var(--simple-colors-default-theme-accent-5, #FFFFFF));
        width: 100%;
        height: 125px;
      }
      

      :host ::slotted(p) {
        height: 100px;
        overflow: auto;
        margin: 0px;
      }

      hr {
        border-bottom: 3px solid var(--hero-card-description-border, var(--simple-colors-default-theme-grey-1, #FFFFFF));
      }

      .grid-container {
        height: 50px;
        overflow: auto;
      }

      * {
        margin: 0px;
      }

      #heroname {
        text-transform: uppercase;
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        color: var(--hero-card-name-color);
        text-shadow: var(--hero-card-name-shadow);
      }

      #type {
        color: var(--hero-card-herotype-color);
        text-shadow: var(--hero-card-herotype-shadow);
      }

      #descriptionheader{
        color: var(--hero-card-description-header-color);
        text-shadow: var(--hero-card-description-header-shadow);

      }

      #powersheader{
        color: var(--hero-card-powers-headers-color);
        text-shadow: var(--hero-card-powers-headers-shadow);
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
        grid-column-gap: 15px;
        grid-row-gap: 10px;
      }

      /*preset for dc hero cards */
      :host([universe="dc"]) {
        border: 5px solid var(--hero-card-border, var(--simple-colors-default-theme-indigo-11, #FFFFFF));
      }

      :host([universe="dc"]) ::slotted(img) {
        border-top: 3px solid var(--hero-card-border, var(--simple-colors-default-theme-indigo-9, #FFFFFF));
        border-bottom: 3px solid var(--hero-card-border, var(--simple-colors-default-theme-indigo-9, #FFFFFF));
        width: 100%;
      }

      :host([universe="dc"]) hr {
        border-bottom: 3px solid var(--hero-card-description-border, var(--simple-colors-default-theme-blue-7, #FFFFFF));
      }

      :host([universe="dc"]) #header  {
        background-image: var(--hero-card-header-image);
        background-size: cover;
        background-position: center; 
      }

      :host([universe="dc"]) #footer  {
        background-image: var(--hero-card-header-image);
        background-size: cover; 
        background-position: center; 
      }



      /**preset for marvel hero cards */
      :host([universe="marvel"])  {
        border: 5px solid var(--hero-card-border, var(--simple-colors-default-theme-orange-6));
      }

      :host([universe="marvel"]) ::slotted(img) {
        border-top: 3px solid var(--simple-colors-default-theme-orange-4);
        border-bottom: 3px solid var(--simple-colors-default-theme-orange-4);
        width: 100%;
      }

      :host([universe="marvel"]) #header  {
        background-image: var(--hero-card-header-image);
        background-size: cover;
        
        
      }

      :host([universe="marvel"]) #footer  {
        background-image: var(--hero-card-header-image);
        background-size: cover;
      }

      :host([universe="marvel"]) hr  {
        border-bottom: 3px solid var(--hero-card-description-border, var(--simple-colors-default-theme-orange-4));
      }

      
    `;
  }

  static get properties() {
    
    return {
      ...super.properties,
      name: {type: String},
      powers: {type: String},
      universe: {type: String},
      type: {type: String},
      basePath:{type: String},
      headerimage: {type: String}
    };
  }


  constructor() {
    super();
    this.name = "";
    this.powers = "";
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
      <section  id="header">
          <h1 id="heroname">${this.name}</h1>
          <img id="logo" src=${logoUsed}>
          <h2 id="type">${this.type}</h2>
      </section>

      <slot id="heroimage" name="heroimage"></slot>
      <h2 id="descriptionheader">Description</h2>
      <hr>
      <slot name="description"></slot>
      <hr>
      <h2 id="powersheader">Powers</h2>
      <hr>
      <div class="grid-container">
        ${powers.map(power => 
          html`<span class="grid-item"> ${power} </span>`
          )}
      </div>
      <hr>

      <section id="footer"></section>
    `;
  }

}

window.customElements.define('hero-card', HeroCard);





