import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register({ handleRegister }) {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("dados capturados:", data);
    handleRegister(data.email, data.password)
      .then(() => {
        navigate("/signin");
      })
      .catch((err) => {
        console.log("Erro no registro:", err);
      });
  };

  return (
    <>
      <header className="header">
        <div className="header__menu">
          <Link to="/">
            <img
              src="/images/logo/logo.png"
              alt="Logo Verde Vivo"
              className="header__logo"
            />
          </Link>
          <nav className="header__nav">
            <ul className="header__nav-links">
              <li>
                <a className="header__nav-link" onClick={() => navigate("/")}>
                  Produtos
                </a>
              </li>
              <li>
                <a
                  className="header__nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsPromoOpen(true);
                  }}
                >
                  Promoções
                </a>
              </li>
              <li>
                <a href="#contact" className="header__nav-link">
                  Contato
                </a>
              </li>

              <li>
                <Link to="/about" className="header__nav-link">
                  Sobre nós
                </Link>
              </li>
            </ul>
          </nav>

          <a
            className="header__container-user_favorites"
            onClick={(e) => {
              e.preventDefault();
              setIsFavoritesOpen(true);
            }}
          >
            <img
              src="/images/icons/favorites.png"
              className="header__container-user_icone-favorites"
              alt="Coração Favoritos"
            />
            <div className="header__container-user_text">Favoritos</div>
          </a>
          <Link to="/cart" className="header__container-user_cart">
            <img
              src="/images/icons/cart_icon.png"
              alt="Cart Ícone"
              className="header__container-user_icone-cart"
            />
            <div className="header__container-user_text">Carrinho</div>
          </Link>
        </div>
      </header>
      <div className="page">
        <section className="register">
          <p className="register__welcome">Inscrever-se</p>
          <form className="register__form" onSubmit={handleSubmit}>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              value={data.email}
              onChange={handleChange}
            />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Senha"
              value={data.password}
              onChange={handleChange}
            />

            <button type="submit" className="register__button">
              Inscrever-se
            </button>
          </form>
          <div className="register__signin">
            <p>Já é um membro?</p>
            <Link to="/login" className="register__login-link">
              Faça o login aqui!
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
