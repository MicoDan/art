import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Marketplace from "./pages/Marketplace";
import Boolean from "./pages/Boolean";
import Auctions from "./pages/Auctions";
import Drop from "./pages/Drop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/boolean" element={<Boolean />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/drop" element={<Drop />} />
      </Routes>
    </>
  );
}

export default App;
