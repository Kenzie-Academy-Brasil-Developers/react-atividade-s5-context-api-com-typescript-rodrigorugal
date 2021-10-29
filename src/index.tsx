import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Provider from "./providers";
import RESet from "./style/RESET/reset";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <RESet />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
