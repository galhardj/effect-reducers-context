import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // This AuthContextProvider should be placed here instead of directly in the App.js' jsx wrapper
  // previously done so, the App.js component winded up wasn't refreshed
  // so here it is put instead in the outter component of App.js itself
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
