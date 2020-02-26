import {
  CHANGE_DIRECTION,
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
    case CHANGE_DIRECTION:
      console.log(action.direction);
      return {
        ...state,
        direction: action.direction
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
