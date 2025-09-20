import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Building from "./pages/Building";
import NotFound from "./pages/NotFound";
import UnderConstruction from "./pages/UnderConstruction";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/building" element={<Building />} />
        {/* Under Construction Routes */}
        <Route path="/products" element={<UnderConstruction />} />
        <Route path="/gallery" element={<UnderConstruction />} />
        <Route path="/contact" element={<UnderConstruction />} />
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      
    </Router>
  );
}
