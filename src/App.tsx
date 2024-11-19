import { Routes,Route } from "react-router-dom";
import Content from "./components/layout/Content";

export default function App() {
    return (
      <Routes>
        <Route path="/" element={<Content></Content>}></Route>
      </Routes>
    )
  }