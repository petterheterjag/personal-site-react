import React from 'react';
import './Portrait.scss';
import {TrackDocument} from 'react-track';
import {calculateScrollY} from 'react-track/lib/tracking-formulas';
import {tween} from 'react-imation';
import {rgba} from 'react-imation/tween-value-factories';

function Portrait() {
  return (
  	<TrackDocument formulas={[calculateScrollY]}>
      {scrollY =>
        <div>
          <div className="Portrait">
            <img className="Portrait-image" src="petter-nilsson.jpg" width="1000" style={tween(scrollY, [
              [0, {opacity: 1.0}],
              [300, {opacity: 0.5}]
            ])} />
            <img className="Portrait-overlay" src="petter-nilsson-salmon.jpg" width="1000" style={tween(scrollY, [
              [0, {opacity: 0.0}],
              [300, {opacity: 1.0}]
            ])} />
          </div>
        </div>
      }
    </TrackDocument>
  );
}

export default Portrait;
