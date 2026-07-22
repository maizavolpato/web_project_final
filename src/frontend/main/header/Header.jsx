import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import FavoritesModal from "../favoritesModal/FavoritesModal.jsx";
import OpenWeather from "../weather/Weather.jsx";

export default function Header() {
  const location = useLocation();
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  return (
    <header className="header">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:wght@500;700&display=swap"
        rel="stylesheet"
      ></link>
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
              <a href="#products" className="header__nav-link">
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
              <Link to="/about" className="header__nav-link">
                Sobre nós
              </Link>
            </li>
            <li>
              <a href="#contact" className="header__nav-link">
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__container-user">
          <div className="header__container-user_block">
            <Link to="/login">
              <img
                src="images/icons/user_icon.png"
                alt="User Ícone"
                className="header__container-user_icone-user"
              />
            </Link>
            <Link to="/login" className="header__container-user_text">
              Entrar
              <div className="header__container-user_text-sec">
                {" "}
                ou cadastrar{" "}
              </div>
            </Link>
          </div>

          <a
            className="header__container-user_favorites"
            onClick={(e) => {
              e.preventDefault();
              setIsFavoritesOpen(true);
            }}
          >
            <img
              src="images/icons/like_button.png"
              className="header__container-user_icone-favorites"
              alt="Coração Favoritos"
            />
            <div className="header__container-user_text">Favoritos</div>
          </a>
          <Link to="/cart" className="header__container-user_cart">
            <img
              src="images/icons/cart_icon.png"
              alt="Cart Ícone"
              className="header__container-user_icone-cart"
            />
            <div className="header__container-user_text">Carrinho</div>
          </Link>
        </div>
        <div className="header__weather">
          <OpenWeather />
        </div>
      </div>
      <img
        src="images/banners/banner.png"
        alt="Banner"
        className="header__banner"
      />
      {isPromoOpen && (
        <div
          className="header__promo-modal-overlay"
          onClick={() => setIsPromoOpen(false)}
        >
          <div
            className="header__promo-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close modal"
              className="header__promo-modal__close"
              type="button"
              onClick={() => setIsPromoOpen(false)}
            />

            <h2 className="header__promo-modal__title">% Promoções do dia </h2>

            <div className="header__promo-modal__content">
              <img
                src="images/banners/desc_geleias.png"
                alt="Desconto Geléias"
                className="header__promo-modal__image"
              />
              <img
                src="images/banners/desc_pizzas.png"
                alt="Desconto Pizzas"
                className="header__promo-modal__image"
              />
              <img
                src="images/banners/desc_queijos.png"
                alt="Desconto Queijos"
                className="header__promo-modal__image"
              />
            </div>
          </div>
        </div>
      )}
      <FavoritesModal
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
      />
    </header>
  );
}
