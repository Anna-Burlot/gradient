import React from 'react';
import PropTypes from 'prop-types';

const RandomButtons = ({ randomFirst, randomLast }) => (
  <div className="buttons group">
    <button onClick={randomFirst} type="button" className="button">Random First</button>
    <button
      onClick={() => {
        randomFirst();
        randomLast();
      }}
      type="button"
      className="button"
    >
      Random All
    </button>
    <button onClick={randomLast} type="button" className="button">Random Last</button>
  </div>
);

RandomButtons.propTypes = {
  randomFirst: PropTypes.func.isRequired,
  randomLast: PropTypes.func.isRequired,
};

export default RandomButtons;
