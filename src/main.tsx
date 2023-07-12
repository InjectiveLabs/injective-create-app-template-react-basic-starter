import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import WalletStoreWrapper from "./store/WalletProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WalletStoreWrapper>
      <App />
    </WalletStoreWrapper>
  </React.StrictMode>
);
