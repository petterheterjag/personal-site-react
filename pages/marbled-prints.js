import React, { Component } from 'react';
import Image from '../components/Image';
import Link from '../components/Link';

export default class extends Component {

	static defaultProps = {
    title: 'Marbled Prints – Petter Nilsson'
  };

  render() {
    return (
      <article>
        <h2>Marbled Prints</h2>

        <p>
          This was the first print in an intended series called Marbled Prints, each representing a marbled object. The screenprinted poster is 
          called Beef and its pattern comes from a steak's marbled fat.
        </p>

        <p>
          To limit the numbers of colors to keep the silkscreen cost down. 
          By using kraft paper with its own color and texture, as well as overprinting 
          the opaque white with a transparent red, more shades could be created.
        </p>

        <Image src="marbled-prints/beef1.jpg" size="large" />
        <Image src="marbled-prints/beef5.jpg" size="large" />
				<Image src="marbled-prints/beef2.jpg" size="large" />
				<Image src="marbled-prints/beef3.jpg" size="large" />
				<Image src="marbled-prints/beef4.jpg" size="large" />
				<Image src="marbled-prints/beef6.jpg" size="large" />
				<Image src="marbled-prints/beef7.jpg" size="large" />
				<Image src="marbled-prints/beef8.jpg" size="large" />

      </article>
    );
  }
}