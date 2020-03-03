import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "src/components/App";
import store from "src/store";

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);
const rootDomElement = document.getElementById("root");

render(rootReactElement, rootDomElement);
