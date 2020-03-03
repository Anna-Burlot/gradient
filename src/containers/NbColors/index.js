// == Imports NPM

import { connect } from "react-redux";

// == Imports locaux
import NbColors from "src/components/NbColors";

// == Branchements

const mapStateToProps = state => {
  return {
    nbColors: state.nbColors
  };
};

const mapDispatchToProps = null;

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(NbColors);
