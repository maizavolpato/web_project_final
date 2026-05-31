import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import Home from "../components/main/home/home.jsx";
import Footer from "../components/footer/Footer.jsx";
import About from "./pages/about/About.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";

function App() {
  const location = useLocation();

  const hideHeader =
    location.pathname === "/login" ||
    location.pathname === "/cart" ||
    location.pathname === "/about";

  return (
    <div className="page">
      <div className="page__container">
        {!hideHeader && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<NotFound />} />
          <Route path="/cart" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
