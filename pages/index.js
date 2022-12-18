import React, { Component } from 'react';
import Portrait from '../components/Portrait';
import Link from '../components/Link';

export default class extends Component {

  static defaultProps = {
    title: 'Petter Nilsson – Digital Product Designer'
  };

  render() {
    return (
      <article>
      	<Portrait />

      	<h2>Introduction</h2>
        <p>Hi, I’m Petter. During the past 10+ years I've been busy designing apps and web experiences at startups and large tech companies.
          In late 2021, I left my role as a Staff Product Designer at Shopify to focus on building my own products as well as offer my services as a freelancer. <a href="mailto:petterheterjag@gmail.com">Get in touch</a> if you're interested!</p>
        
        <p>As a technical designer, I love to code. I prefer tools such as Framer where code (JS/React) gives me the freedom to design interactions and animations without 
          limitations and create prototypes that can be evaluated as if using the real product. I thrive in organizations where designers and developers work closely 
          together and there's no strict divider between the disciplines.</p>
        
        <p>I'm based in Stockholm (Sweden), but have been working 100% remotely together with people across Europe and North America for the past years.</p>
	
				<h2>Past work</h2>

        <section>
          <h3>At <a href="http://shopify.com">Shopify</a> (2018–2021)</h3>
          <p>
          When Tictail was aquired by Shopify, our team was tasked with building something new. 
          After having explored tons of oppertunities we eventually settled on transforming Arrive, 
          Shopify's tracking app, into a powerful shopping companion and eventually a destination. 
          We launched it as <a href="https://shop.app/">Shop</a>, and it has since climbed to the <a href="https://app.sensortower.com/ios/rankings/top/iphone/us/shopping?date=2021-12-18">top of the App Store charts</a> in North America with millions of happy users (currently a 4.8 rating).
          </p>
          <p>
            I first joined Shopify as a Design Lead/Manager, but pretty soon switched to the IC track as a Staff Product Designer. 
            During my three years on the Shop team, I worked on a lot of things:
            <ul>
              <li>Together with senior management on northstar prototypes to set our long-term vision.</li>
              <li>Led design for the order management experience and the transformation from a tracker app to a shopping companion.</li>
              <li>Rethought our onboarding from scratch and desinged a new progressive experience.</li>
              <li>Designed an <a href="https://shop.app/gift-shop">unique gift shopping experience</a>.</li>
              <li>And a few projects I'm not allowed to talk about yet :)</li>
            </ul>
          </p>
          <p>Pending Patents: <a href="https://www.patentguru.com/US2021150593A1">US2021150593A1</a>, <a href="https://www.patentguru.com/US2021150604A1">US2021150604A1</a></p>
        </section>

        <section>
          <h3>At <a href="http://tictail.com">Tictail</a> (2014–2018)</h3>
          <p>I joined Tictail in early 2014, back when the company was very small. 
          The first project I worked with was rethinking the <a href="https://dribbble.com/shots/1735395-Tictail-Checkout">Checkout</a> from scratch. 
          I then moved on to work on the brand owner side of Tictail, designing the ability 
          to start an online shop <a href="https://web.archive.org/web/20160405092235/https://tictail.com/mobile/">from your phone</a>, something that we became the 
          first app in the world to support. Next up was creating <a href="https://tictail.com/talk/">Talk</a>, a messaging 
          platform for connecting Tictail’s customers and brand owners. Check out <a href="https://www.fastcompany.com/3052632/elasticity/tictails-in-app-messaging-out-to-bring-real-customer-service-to-online-shopping">this article </a>
          in Fast Company.</p>
          <p>
          During the final couple of years, my focus was on building out Tictail's <a href="http://tictail.com">marketplace</a>, while also establishing and maintaing its design system. 
          We began integrating video into the core of the experience and I did a lot of prototyping of how an <a href="https://medium.com/tictail/prototyping-a-camera-interface-967b07f66898">ecommerce camera interface</a> would look.</p>
        </section>

        <section>
          <h3>At <a href="http://zettle.com">iZettle</a> (2012–2013)</h3>
          <p>iZettle was my first encounter with the startup world. At the time, it was a small Swedish fintech startup positionting 
            itself as Square for Europe (the company was later bought by Paypal).</p>
          <p>
            I joined as a digital art director, mainly focusing on the public 
            website and other marketing efforts. But during my two years there, I transitioned 
            into a product design role, focusing on designing the <a href="https://dribbble.com/shots/1251705-iZettle-Sales-Reports">web dashboard</a>.</p>
        </section>

        <section>
          <h3>At <a href="http://identityworks.se">Identity Works</a> (2010–2012)</h3> 
          <p>My first proper job after finishing my graphic design studies was at Identity Works. 
          It’s mainly a branding agency, but I joined their small digital department. Apart from 
          designing numerous websites and apps, I also created the graphic identity for <a href="https://www.getswish.se/">Swish</a>, 
          an app for instant money transfers and payments, used by almost all Swedes.</p>
        </section>

		    <h2>Side projects</h2>
		    <p>
          <a href="https://www.figma.com/community/plugin/1021499620946646699/Warp-Tools">Warp Tools</a> (Figma plugin)<br />
          <a href="https://www.figma.com/community/plugin/759433498184507623/Chromatic-Figma">Chromatic Figma</a> (Figma plugin)<br />
          <a href="https://github.com/petterheterjag/chromatic-sketch">Chromatic Sketch</a> (Sketch plugin)<br />
          <a href="/bike" onClick={Link.handleClick}>Single speed bike</a><br />
          <a href="/chair" onClick={Link.handleClick}>Plywood chair</a><br />
          <a href="https://github.com/petterheterjag/TabBarModule">TabBarModule</a> (Framer module)<br />
          <a href="http://www.psdvalidator.com/">PSD Validator</a> (Validator for PSD files)<br />
          <a href="/marbled-prints" onClick={Link.handleClick}>Marbled Prints</a> (Poster)<br />
				</p>

				<h2>Contact</h2>
		    <p>
          <a href="mailto:petterheterjag@gmail.com">Mail</a><br />
          <a href="https://twitter.com/petterheterjag">Twitter</a><br />
          <a href="https://masto.ai/@petterheterjag">Mastodon</a><br />
          <a href="https://github.com/petterheterjag">Github</a><br />
				</p>
		  </article> 
		);
  }
}
