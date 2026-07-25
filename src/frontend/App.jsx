import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../frontend/main/header/Header.jsx";
import Home from "../frontend/main/home/home.jsx";
import Footer from "../frontend/main/footer/Footer.jsx";
import About from "../frontend/pages/about/About.jsx";
import NotFound from "../frontend/pages/notFound/NotFound.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import CustomerArea from "./pages/customerArea/CustomerArea.jsx";
import PrivateRoute from "./pages/PrivateRoute.jsx";
import Cart from "./pages/cart/Cart.jsx";

function App() {
  const location = useLocation();

  const hiddenRoutes = [
    "/login",
    "/signup",
    "/about",
    "/customerarea",
    "/customerarea/cart",
  ];

  const hideHeader = hiddenRoutes.includes(location.pathname);

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
          <Route
            path="/customerarea"
            element={
              <PrivateRoute>
                <CustomerArea />
              </PrivateRoute>
            }
          />
          <Route
            path="/customerarea/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
