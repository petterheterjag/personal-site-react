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
          This project is very much work in progress, but here are some 3d renders of how it could end up looking :)
        </p>

        <Image src="chair/wireframe.png" size="large" />
        <Image src="chair/render3.jpg" size="large" />
        <Image src="chair/render4.jpg" size="large" />
        <Image src="chair/render5.jpg" size="large" />
      </article>
    );
  }
}