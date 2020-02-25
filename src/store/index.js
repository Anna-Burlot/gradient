/* eslint-disable no-underscore-dangle */
// redux = lib fournissant un gestionnaire de store
import { createStore } from 'redux';

import reducer from 'src/reducers';


// store = gestionnnaire / gardien du state
// 3 méthodes
// - getState : lecture du state
// - dispatch : écriture du state
// émettre une intention / une action qui pourra entrainer une modification du state
// - subscribe : s'abonner aux modifications du state et réagir
const store = createStore(
  reducer,
  // pour pouvoir utiliser le devtool
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;

// si on avait voulu se faire un createStore à la mano


// const createStore = (storeReducer) => {
//   let state = storeReducer();
//   const subscribers = [];

//   return {
//     getState: () => {
//       return { ...state };
//     },
//     dispatch: (action) => {
//       state = storeReducer(state, action);
//       subscribers.forEach((subscriber) => {
//         subscriber();
//       });
//     },
//     subscribe: (callback) => {
//       subscribers.push(callback);
//     },
//   };
// };
