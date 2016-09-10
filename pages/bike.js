import React, { Component } from 'react';
import Image from '../components/Image';
import Link from '../components/Link';

export default class extends Component {

	static defaultProps = {
    title: 'Single speed bike – Petter Nilsson'
  };

  render() {
    return (
      <article>
        <h2>Single speed bike</h2>

        <p>
          One of the perks you get working at <a href="http://tictail.com">Tictail</a> is a 2000 kr (about $250) allowance every month 
          to use for buying products from shops on the platform. When my bike got stolen, I thought of using that 
          money to get me a new one. The idea was to buy a few parts each month, and after a while I would have all needed.
        </p>
        <p>
          It turned out Tictail had quite a big selection of shops selling biking gear. The hard part, however, was to find out
          if the parts fitted with each other. Knowing basically nothing about how to assembly bikes (or about bikes in 
          general really), I was up for a lot of learning. 
        </p>

        <Image src="bike/bike1.jpg" size="large" />
        
        <p>
          Apparently there are a lot of standards for bicycle parts: Italian, French, Japanese, Old English, American and more. 
          One part wouldn't fit because it was 0.2mm off. Here's a list of what I did end up using:
        </p>
        <p>
          <strong>Frame:</strong> Standert The Usual (Cr-Mo steel)<br />
          <strong>Handlebar:</strong> Cinelli 64 Giro d'Italia<br />
          <strong>Saddle:</strong> Charge Scoop<br />
          <strong>Stem:</strong> Cinelli 1A<br />
          <strong>Wheels:</strong> Bombtrack Drome<br />
          <strong>Pedals:</strong> BLB Classic City<br />
          <strong>Crankset:</strong> Charge Rotisserie<br />
          <strong>Bottom bracket:</strong> Tange Square Taper<br />
          <strong>Bar tape:</strong> Cinelli Cork Ribbon<br />
          <strong>Brakes:</strong> Miche Performance<br />
          <strong>Seat post:</strong> Paul Components Tall & Handsome<br />
          <strong>Tires:</strong> Michelin Dynamic Classic<br />
          <strong>Headset:</strong> BLB x Tange 1” Sealed Threaded<br />
          <strong>Brake levers:</strong> BLB BLevers Crosstop<br />
          <strong>Brake cables:</strong> Velo Orange Metallic Breaded<br />
          <strong>Freewheel:</strong> Shimano<br />
          <strong>Chain:</strong> YBN
        </p>

        <Image src="bike/bike2.jpg" size="large" />

        <p>
          When the bike was fully assembled I started tinkering with the idea of making it more personal by putting a metal 
          badge on the head tube. I created a simple design with my initials, and searched online for companies that could produce it, 
          but found no good options. So I decided to produce it, or rather etch it, myself.
        </p>

        <Image src="bike/bike4.jpg" size="large" />

        <p>
          I took inpiration from a technique used to create circuit boards, where you etch copper lamination.
          The badge is made from a copper sheet, with my design ironed on by using <a href="http://www.techniks.com/">Press-n-Peel</a> transfer film, 
          and then etched for about an hour in <a href="https://en.wikipedia.org/wiki/Sodium_persulfate">Sodium persulfate</a>.
          It was then cut, bent and glued onto the bike.
        </p>

        <Image src="bike/bike3.jpg" size="large" />
      </article>
    );
  }
}