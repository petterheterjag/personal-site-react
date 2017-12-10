import React, { Component } from 'react';
import Image from '../components/Image';
import Link from '../components/Link';

export default class extends Component {

	static defaultProps = {
    title: 'Plywood chair – Petter Nilsson'
  };

  render() {
    return (
      <article>
        <h2>Plywood chair</h2>

        <p>
          I've been working on this project on and off for quite some time, but now it's finally finished!
          Having done virtually zero woodworking or physical product design before, the idea to build a chair felt daunting yet exciting.
          To my counter my inexperience, I decided to use birch plywood as the material, 
          and <a href="https://en.wikipedia.org/wiki/CNC_router">CNC routing</a> as the technique to make 
          the parts needed from my digital sketches. The woodworking required would then be limited to adding finish to the parts and assambling them.
        </p>

        <p>
          After sketching on paper I made a model of the chair in <a href="https://www.autodesk.com/products/autocad/">AutoCAD</a>. 
          Here're an isometric wireframe of the 3D model as well as renders with texture and lighting:
        </p>
        
        <Image src="chair/wireframe.png" size="large" />
        <Image src="chair/render.jpg" size="large" />

        <p>
          Assembling the parts turned out to be a lot more time consuming than anticipated, but I learned a lot. My original plan was to paint the seat and back, 
          but I kind of liked the texture of the plywood edges and left them as is. Instead I finished the chair off with 
          hardwax oil with white pigments to make the birch wood a bit brighter. Anyway, here's the completed chair:
        </p>

        <Image src="chair/chair1.jpg" size="large" />
        <Image src="chair/chair2.jpg" size="large" />
        <Image src="chair/chair3.jpg" size="large" />
        <Image src="chair/chair4.jpg" size="large" />
      </article>
    );
  }
}