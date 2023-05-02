import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import DatatablePage from "./components/DatatablePage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/DatatablePage" element={<DatatablePage />} />
      </Routes>
    </>
  );
}

export default App;
