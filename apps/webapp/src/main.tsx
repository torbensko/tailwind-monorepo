import React from "react";
import ReactDOM from "react-dom/client";
import { DebugPage } from "./pages/DebugPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DebugPage />
  </React.StrictMode>
);
