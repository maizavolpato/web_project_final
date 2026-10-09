import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../frontend/main/header/Header.jsx";
import Main from "../frontend/main/main/Main.jsx";
import Footer from "../frontend/main/footer/Footer.jsx";
import About from "../frontend/pages/about/About.jsx";
import NotFound from "../frontend/pages/notFound/NotFound.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import CustomerArea from "./pages/customerArea/CustomerArea.jsx";
import PrivateRoute from "./pages/PrivateRoute.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Favorites from "./pages/favorites/Favorites.jsx";

function App() {
  const location = useLocation();

  const hiddenRoutes = [
    "/login",
    "/signup",
    "/about",
    "/customerarea",
    "/customerarea/shopping",
    "/customerarea/return",
    "/customerarea/cart",
    "/customerarea/favorites",
  ];

  const hideHeader = hiddenRoutes.includes(location.pathname);

  return (
    <div className="page">
      <div className="page__container">
        {!hideHeader && <Header />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route
            path="/customerarea"
            element={
              <PrivateRoute>
                <CustomerArea />
              </PrivateRoute>
            }
          />
          <Route
            path="/customerarea/shopping"
            element={
              <PrivateRoute>
                <NotFound />
              </PrivateRoute>
            }
          />
          <Route
            path="/customerarea/return"
            element={
              <PrivateRoute>
                <NotFound />
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
          <Route
            path="/customerarea/favorites"
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
