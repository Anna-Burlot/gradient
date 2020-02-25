import {
  CHANGE_DIRECTION_TO_RIGHT,
  CHANGE_DIRECTION_TO_LEFT,
  CHANGE_DIRECTION_TO_45,
  CHANGE_DIRECTION_TO_135,
  CHANGE_DIRECTION_TO_225,
  CHANGE_DIRECTION_TO_315,
  RANDOMIZE_FIRST_COLOR,
  RANDOMIZE_LAST_COLOR
} from "src/actions";

// == initialState
const initialState = {
  firstColor: "#e367a4",
  lastColor: "#48b1f3",
  direction: "90deg",
  nbColors: 0
};

// = le reducer / entonnoir
// son rôle : traduire une intention(action) vers une modification du state
// Entrées :
// - le state actuel
// - une action = une intention
// Sortie :
// - un state modifié en fonction de l'action
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_DIRECTION_TO_RIGHT:
      return {
        ...state,
        direction: "90deg"
      };
    case CHANGE_DIRECTION_TO_LEFT:
      return {
        ...state,
        direction: "270deg"
      };
    case CHANGE_DIRECTION_TO_45:
      return {
        ...state,
        direction: "45deg"
      };
    case CHANGE_DIRECTION_TO_135:
      return {
        ...state,
        direction: "135deg"
      };
    case CHANGE_DIRECTION_TO_225:
      return {
        ...state,
        direction: "225deg"
      };
    case CHANGE_DIRECTION_TO_315:
      return {
        ...state,
        direction: "315deg"
      };
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
    default:
      return state;
  }
};

export default reducer;
