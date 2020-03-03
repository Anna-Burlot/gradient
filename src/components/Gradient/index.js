import React from 'react';
import PropTypes from 'prop-types';

const Gradient = ({ direction, firstColor, lastColor }) => (
  <div id="gradient" style={{ background: `linear-gradient(${direction},${firstColor},${lastColor})` }} />
);

Gradient.propTypes = {
  direction: PropTypes.string.isRequired,
  firstColor: PropTypes.string.isRequired,
  lastColor: PropTypes.string.isRequired,
};

export default Gradient;
