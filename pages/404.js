/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

export default class extends Component {

	static defaultProps = {
    title: '404 Not found – Petter Nilsson'
  };

  render() {
    return (
      <article>
        <h1>Not Found</h1>
        <p>The page you're looking for was not found.</p>
      </article>
    );
  }

}
