import { connect } from "react-redux";

import RandomButtons from "src/components/RandomButtons";
import { randomHexColor } from "src/utils";
import { randomizeFirstColor, randomizeLastColor } from "src/actions";

// lecture
const mapStateToProps = null;

// écriture
const mapDispatchToProps = dispatch => ({
  randomFirst: () => {
    const color = randomHexColor();
    dispatch(randomizeFirstColor(color));
  },
  randomLast: () => {
    const color = randomHexColor();
    dispatch(randomizeLastColor(color));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RandomButtons);
