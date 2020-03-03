import { connect } from 'react-redux';

import Gradient from 'src/components/Gradient';

const mapStateToProps = (state) => ({
  direction: state.direction,
  firstColor: state.firstColor,
  lastColor: state.lastColor,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Gradient);
