/* eslint-disable import/prefer-default-export */
// = action types
// on stocke des chaines de caractères représentant les noms de mes actions (leur type) dans des constantes, ainsi je n'aurai jamais besoin de récrire ces chaines de caractères. Ecrire des chaines de caractères est potentielement source d'erreur
export const CHANGE_DIRECTION_TO_RIGHT = "CHANGE_DIRECTION_TO_RIGHT";
export const CHANGE_DIRECTION_TO_LEFT = "CHANGE_DIRECTION_TO_LEFT";
export const CHANGE_DIRECTION_TO_45 = "CHANGE_DIRECTION_TO_45";
export const CHANGE_DIRECTION_TO_135 = "CHANGE_DIRECTION_TO_135";
export const CHANGE_DIRECTION_TO_225 = "CHANGE_DIRECTION_TO_225";
export const CHANGE_DIRECTION_TO_315 = "CHANGE_DIRECTION_TO_315";
export const RANDOMIZE_LAST_COLOR = "RANDOMIZE_LAST_COLOR";
export const RANDOMIZE_FIRST_COLOR = "RANDOMIZE_FIRST_COLOR";

// = action creators
// une fonction qui retourne un objet action
export const randomizeLastColor = color => ({
  type: RANDOMIZE_LAST_COLOR,
  // color: color,
  color
});

export const randomizeFirstColor = color => ({
  type: RANDOMIZE_FIRST_COLOR,
  color
});

export const changeDirectionToLeft = () => ({
  type: CHANGE_DIRECTION_TO_LEFT
});

export const changeDirectionToRight = () => ({
  type: CHANGE_DIRECTION_TO_RIGHT
});

export const changeDirectionTo45 = () => ({
  type: CHANGE_DIRECTION_TO_45
});
export const changeDirectionTo135 = () => ({
  type: CHANGE_DIRECTION_TO_135
});
export const changeDirectionTo225 = () => ({
  type: CHANGE_DIRECTION_TO_225
});
export const changeDirectionTo315 = () => ({
  type: CHANGE_DIRECTION_TO_315
});
