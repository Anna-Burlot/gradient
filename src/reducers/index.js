import {
  RANDOMIZE_FIRST_COLOR,
  RANDOMIZE_LAST_COLOR,
  CHANGE_DIRECTION
} from "src/actions";

// == initialState
const initialState = {
  firstColor: "#e367a4",
  lastColor: "#48b1f3",
  direction: "90deg",
  nbColors: 0
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RANDOMIZE_LAST_COLOR:
      return {
        ...state,
        nbColors: state.nbColors + 1,
        lastColor: action.color
      };
    case RANDOMIZE_FIRST_COLOR:
      return {
        ...state,
        nbColors: state.nbColors + 1,
        firstColor: action.color
      };
    case CHANGE_DIRECTION:
      return {
        ...state,
        direction: action.direction
      };
    default:
      return state;
  }
};

export default reducer;
