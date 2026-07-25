import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.css";

import { SnackbarProvider } from "./context/SnackbarContext";

ReactDOM.createRoot(

  document.getElementById("root")!

).render(

  <React.StrictMode>

    <SnackbarProvider>

      <BrowserRouter>

        <App />

      </BrowserRouter>

    </SnackbarProvider>

  </React.StrictMode>

);