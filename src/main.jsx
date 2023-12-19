import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import global_en from "./translation/en/global.json";
import global_fa from "./translation/fa/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    fa: {
      global: global_fa,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimatePresence mode={"wait"}>
      <BrowserRouter>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </BrowserRouter>
    </AnimatePresence>
  </React.StrictMode>
);
