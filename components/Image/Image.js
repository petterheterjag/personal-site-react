import React from 'react';
import './Image.scss';

function Image(props) {
  return (
  	<div className="Image">
		<img className={props.size} src={props.src} width="1000" />
	</div>
  );
}

export default Image;
