import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Main from "../../main/main/Main";
import LogoutButton from "../LogoutButton";

export default function CustomerArea() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/api/auth/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();

        if (!response.ok) {
          if (response.status === 401) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/login");
            return;
          }

          throw new Error(
            result.message || "Erro ao carregar os dados do usuário.",
          );
        }

        setUser(result.user);

        localStorage.setItem("user", JSON.stringify(result.user));
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        setError("Não foi possível carregar seus dados.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  if (loading) {
    return <p>Carregando sua área...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className="dashboard">
        <div className="dashboard__menu">
          <img
            src="/images/logo/logo.png"
            alt="Logo Verde Vivo"
            className="dashboard__logo"
          />
          <nav className="dashboard__nav">
            <div className="dashboard__nav-links">
              <Link to="/customerarea/shopping" className="dashboard__nav-link">
                Compras efetuadas
              </Link>
              <Link to="/customerarea/return" className="dashboard__nav-link">
                Devoluções
              </Link>
            </div>
            <div className="dashboard__nav-links-user">
              <Link
                to="/customerarea/favorites"
                className="dashboard__nav-link"
              >
                <img
                  src="/images/icons/favorites.png"
                  className="dashboard__image-favorites"
                  alt="Coração Favoritos"
                />
                Favoritos
              </Link>
              <Link to="/customerarea/cart" className="dashboard__nav-link">
                <img
                  src="/images/icons/cart_icon.png"
                  className="dashboard__image-cart"
                  alt="Carrinho"
                />
                Carrinho
              </Link>
            </div>
          </nav>
          <input
            type="text"
            placeholder="Pesquisar produtos"
            className="dashboard__input"
          />
          <LogoutButton />
        </div>
      </div>
      <div className="customer-area">
        <img
          src="/images/banners/banner_customerarea.png"
          className="customer-area__banner"
          alt="Banner Promoções"
        />

        <div className="customer-are__box-title">
          <img
            src="/images/icons/icon_euro.png"
            className="customer-area__box-title__image"
            alt="Icone Euro"
          />
          Seus cupons de desconto do mês:
        </div>

        <div className="customer-area__cupons-image">
          <div className="customer-area__cupon-container">
            <img
              src="/images/banners/desc_geleias.png"
              className="customer-area__image-desc"
              alt="Desconto de geléias"
            />
          </div>
          <div className="customer-area__cupon-container">
            <img
              src="/images/banners/desc_queijos.png"
              className="customer-area__image-desc"
              alt="Desconto de quijos"
            />
          </div>
          <div className="customer-area__cupon-container">
            <img
              src="/images/banners/desc_pizzas.png"
              className="customer-area__image-desc"
              alt="Desconto de pizzas"
            />
          </div>
        </div>
      </div>
      <Main />
    </>
  );
}
