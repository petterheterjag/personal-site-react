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
        <p>Hi, I’m Petter. I’m a designer at <a href="http://tictail.com">Tictail</a> in Stockholm, Sweden. 
        I do what people nowadays tend to call digital product design. Meaning 
        everything from research, wireframes, prototypes, visual design and user 
        testing of products.</p>

        <p>I also really enjoy coding, and love to help developers get the 
        final polish in place as well as creating advanced prototypes in tools 
        like <a href="https://framerjs.com/">Framer</a>. This site was created while exploring <a href="https://facebook.github.io/react/">React</a>.</p>

				<p>I got a traditional graphic design education, and started out doing 
        mostly branding work. However I soon transitioned into the digital space, 
        picking up what’s been a hobby since my early teens, creating digital products.</p> 
				
				<h2>Work</h2>

				<p><strong>At <a href="http://tictail.com">Tictail</a> (current) —> </strong> 
        I joined Tictail in early 2014, back when the company was very small. 
        The first project I worked with was rethinking the <a href="https://dribbble.com/shots/1735395-Tictail-Checkout">Checkout</a> from scratch. 
        I then moved on to work on the brand owner side of Tictail, designing the ability 
        to start an online shop <a href="https://web.archive.org/web/20160405092235/https://tictail.com/mobile/">from your phone</a>, something that we became the 
        first app in the world to support. Next up was creating <a href="https://tictail.com/talk/">Talk</a>, a messaging 
        platform for connecting Tictail’s customers and brand owners. It's pretty cool, check out <a href="https://www.fastcompany.com/3052632/elasticity/tictails-in-app-messaging-out-to-bring-real-customer-service-to-online-shopping">this article </a>
        in Fast Company. Right now I’m working on exciting things for the Tictail <a href="http://tictail.com">marketplace</a>.</p>

        <p><strong>At <a href="http://izettle.com">iZettle</a> —> </strong> 
        I started at iZettle as a digital art director, mainly focusing on the public 
        website and other marketing efforts. But during my two years there, I transitioned 
        into a product design role, focusing on designing the <a href="https://dribbble.com/shots/1251705-iZettle-Sales-Reports">web dashboard</a>.</p>

        <p><strong>At <a href="http://identityworks.se">Identity Works</a> —> </strong> 
        My first proper job after finishing my graphic design studies was at Identity Works. 
        It’s mainly a branding agency, but I joined their small digital department. Apart from 
        designing numerous websites, I also created the graphic identities for <a href="https://www.getswish.se/">Swish</a>, 
        an app used by half of Swedens population for sending money between banks, and <a href="http://housetrip.com">HouseTrip</a>, 
        one of the largest vacation rental websites in the world.</p>

		    <h2>Various personal projects</h2>
        <p>One thing I really enjoy is hobby projects, usually in new areas of design, learning a bunch on the way. This is a collection of some of them.</p>
		    <p>
					<a href="/bike" onClick={Link.handleClick}>Single speed bike</a><br />
          <a href="/chair" onClick={Link.handleClick}>Plywood chair</a> (WIP)<br />
          <a href="http://www.psdvalidator.com/">PSD Validator</a> (Validator for PSD files)<br />
          <a href="/marbled-prints" onClick={Link.handleClick}>Marbled Prints</a> (Poster)<br />
				</p>

				<h2>Contact</h2>
		    <p>
          <a href="mailto:petterheterjag@gmail.com">Mail</a><br />
          <a href="https://twitter.com/petterheterjag">Twitter</a><br />
          <a href="https://dribbble.com/Petterheterjag">Dribbble</a><br />
          <a href="https://github.com/petterheterjag">Github</a><br />
          <a href="https://www.facebook.com/petterheterjag">Facebook</a>
				</p>
		  </article> 
		);
  }
}
