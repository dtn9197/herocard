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
        background-color: var(--descriptionbackground-style,black);
        background-size: cover;
        background-position: center;
        color: white;
        font-size: 0.9rem;
        border: 5px solid grey;
      }

      #header {
        height: 50px;
      }

      #footer {
        height: 25px;
      }

      ::slotted(img) {
        border-top: 3px solid var(--imageborder-style, grey);
        border-bottom: 3px solid var(--imageborder-style, grey);
        width: 100%;
        height: 125px;
      }
      

      ::slotted(p) {
        height: 100px;
        overflow: auto;
        margin: 0px;
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
        color: var(--name-style);
        text-shadow: var(--nameshadow-style);
      }

      #type {
        color: var(--herotype-style);
        text-shadow: var(--herotypeshadow-style);
      }

      #descriptionheader{
        color: var(--descriptionheader-style);
        text-shadow: var(--descriptionheadershadow-style);

      }

      #powersheader{
        color: var(--powersheader-style);
        text-shadow: var(--powersheaderhadow-style);
      }


      :host([universe="dc"]) {
        border: 5px solid var(--cardborder-style, blue);
      }

      :host([universe="dc"]) ::slotted(img) {
        border-top: 3px solid rgb(31, 142, 175);
        border-bottom: 3px solid rgb(31, 142, 175);
        width: 100%;
      }

      :host([universe="dc"]) hr {
        border-bottom: 3px solid var(--descriptionoutline-style,rgb(31, 142, 175));
      }

      :host([universe="dc"]) #header  {
        background-image: var(--headerimage-style, url("../demo/assets/dcuniverse.jpg"));
        background-size: cover;
        background-position: center;
      }

      :host([universe="dc"]) #footer  {
        background-image: var(--headerimage-style, url("../demo/assets/dcuniverse.jpg"));
        background-size: cover;
        background-position: center;
      }

      :host([universe="marvel"])  {
        border: 5px solid var(--cardborder-style, orange);
      }

      :host([universe="marvel"]) ::slotted(img) {
        border-top: 3px solid rgb(247, 125, 12);
        border-bottom: 3px solid rgb(247, 125, 12);
        width: 100%;
      }

      :host([universe="marvel"]) #header  {
        background-image: var(--headerimage-style,url("../demo/assets/marvel1.jpg"));
        background-size: cover;
        background-position: center;
        
      }

      :host([universe="marvel"]) #footer  {
        background-image: var(--headerimage-style,url("../demo/assets/marvel1.jpg"));
        background-size: cover;
        background-position: center;
      }

      :host([universe="marvel"]) hr  {
        border-bottom: 3px solid var(--descriptionoutline-style, rgb(247, 125, 12));
      }


      
      #logo {
        width: 50px;
        position: absolute;
        right: 0px;
        
      }
      h1 {
        display: inline
      }

      ul {
        padding: 5px;
      }

      .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-column-gap: 15px;
      }
    `;
  }

  static get properties() {
    return {
      name: {type: String},
      powers: {type: String},
      heroimage: {type: String},
      universe: {type: String},
      type: {type: String},

    };
  }


  constructor() {
    super();
    this.name = "";
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
          <h1 id="heroname">${this.name}</h1>
          <img id="logo" src=${logoUsed}>
          <h2 id="type">${this.type}</h2>
      </section>
        <!-- <img id ="heroimage" src=${this.heroimage} alt=""> -->
        <slot id="heroimage" name="heroimage"></slot>
            <h2 id="descriptionheader">Description</h2>
            <hr>
            <slot name="description">
            </slot>
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



