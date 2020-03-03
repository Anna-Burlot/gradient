import { connect } from "react-redux";

import Colors from "src/components/Colors";

// lecture
const mapStateToProps = state => ({
  firstColor: state.firstColor,
  lastColor: state.lastColor
});

// écriture
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Colors);
