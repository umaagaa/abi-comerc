import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Building from "./pages/Building";
import NotFound from "./pages/NotFound";
import UnderConstruction from "./pages/UnderConstruction";
import GradjevinskiMaterijal from "./pages/GradjevinskiMaterijal";
import Category2 from "./pages/Category2";
import Category3 from "./pages/Category3";
import Category4 from "./pages/Category4";
import Category5 from "./pages/Category5";
import Category6 from "./pages/Category6";
import Category7 from "./pages/Category7";
import NavBar from "./components/NavBar";
import Products from "./pages/Products";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        
        {/* Category Routes */}
        <Route path="/categories/gradjevinskimaterijal" element={<GradjevinskiMaterijal />} />
        <Route path="/categories/category2" element={<Category2 />} />
        <Route path="/categories/category3" element={<Category3 />} />
        <Route path="/categories/category4" element={<Category4 />} />
        <Route path="/categories/category5" element={<Category5 />} />
        <Route path="/categories/category6" element={<Category6 />} />
        <Route path="/categories/category7" element={<Category7 />} />
        {/* Under Construction Routes */}
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<UnderConstruction />} />
        <Route path="/contact" element={<UnderConstruction />} />
        <Route path="/building" element={<UnderConstruction />} />
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      
    </Router>
  );
}
