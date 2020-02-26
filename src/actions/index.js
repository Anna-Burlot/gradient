/* eslint-disable import/prefer-default-export */
// = action types
// on stocke des chaines de caractères représentant les noms de mes actions (leur type) dans des constantes, ainsi je n'aurai jamais besoin de récrire ces chaines de caractères. Ecrire des chaines de caractères est potentielement source d'erreur
export const CHANGE_DIRECTION = "CHANGE_DIRECTION";
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

export const changeDirection = direction => {
  let degree = direction.substring(2) + "deg";
  console.log(degree);
  return {
    type: CHANGE_DIRECTION,
    direction: degree
  };
};
