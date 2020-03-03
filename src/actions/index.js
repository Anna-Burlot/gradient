/* eslint-disable import/prefer-default-export */

export const RANDOMIZE_LAST_COLOR = "RANDOMIZE_LAST_COLOR";
export const RANDOMIZE_FIRST_COLOR = "RANDOMIZE_FIRST_COLOR";
export const CHANGE_DIRECTION = "CHANGE_DIRECTION";

// = action creators
export const randomizeLastColor = color => ({
  type: RANDOMIZE_LAST_COLOR,
  color
});

export const randomizeFirstColor = color => ({
  type: RANDOMIZE_FIRST_COLOR,
  color
});

export const changeDirection = direction => ({
  type: CHANGE_DIRECTION,
  direction
});
