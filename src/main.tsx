import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/common/loader/Loader.tsx";
import store from "./slices/index.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.Fragment>
      <BrowserRouter>
        <Loader />
        <App />
        <ToastContainer newestOnTop />
      </BrowserRouter>
    </React.Fragment>
  </Provider>
);
