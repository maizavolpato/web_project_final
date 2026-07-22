import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        if (!value) {
          return "O e-mail é obrigatório";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(value)) {
          return "Digite um e-mail válido";
        }
        return "";

      case "password":
        if (!value) {
          return "A senha é obrigatória";
        }

        if (value.length < 6) {
          return "A senha deve ter no mínimo 6 caracteres";
        }
        return "";

      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleLogin = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: "Teste",
        email: data.email,
      }),
    );

    navigate("/costumerarea");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailError = validateField("email", data.email);
    const passwordError = validateField("password", data.password);

    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError,
      });

      return;
    }

    handleLogin();
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
        <section className="login">
          <p className="login__welcome">Entrar</p>
          <form className="login__form" onSubmit={handleSubmit}>
            <input
              id="email"
              required
              name="email"
              type="text"
              placeholder="E-mail"
              value={data.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
            <input
              id="password"
              required
              name="password"
              type="password"
              placeholder="Senha"
              value={data.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}

            <button type="submit" className="login__button">
              Entrar
            </button>
          </form>
          <div className="login__signup">
            <p>Ainda não é membro?</p>
            <Link to="/signup" className="login__login-link">
              Inscreva-se aqui
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
