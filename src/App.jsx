import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Marketplace from "./pages/Marketplace";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </>
  );
}

export default App;
