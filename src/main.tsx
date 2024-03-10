import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "es",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<></>}>
      <App />
    </Suspense>
  </React.StrictMode>,
);
