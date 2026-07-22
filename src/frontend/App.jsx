import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../frontend/main/header/Header.jsx";
import Home from "../frontend/main/home/home.jsx";
import Footer from "../frontend/main/footer/Footer.jsx";
import About from "../frontend/pages/about/About.jsx";
import NotFound from "../frontend/pages/notFound/NotFound.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";

function App() {
  const location = useLocation();

  const hideHeader =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/cart" ||
    location.pathname === "/about";

  return (
    <div className="page">
      <div className="page__container">
        {!hideHeader && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/cart" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
