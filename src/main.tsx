import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import LayoutContextprovider from "./components/custom/LayoutContextprovider.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <LayoutContextprovider>
      <App></App>
    </LayoutContextprovider>
  </BrowserRouter>
);
