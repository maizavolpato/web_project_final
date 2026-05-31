import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import FavoritesModal from "../main/favoritesModal/FavoritesModal.jsx";
import OpenWeather from "../main/weather/Weather.jsx";

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
            src="https://firebasestorage.googleapis.com/v0/b/web-project-final-35d11.firebasestorage.app/o/logo.png?alt=media&token=ad64daf8-0fef-4c29-91a2-80a2d08436a9"
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
                src="https://firebasestorage.googleapis.com/v0/b/web-project-final-35d11.firebasestorage.app/o/user_icon.png?alt=media&token=88e578c9-45f8-4c2e-a4e1-5b57fb460c9b"
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
              src="https://firebasestorage.googleapis.com/v0/b/web-project-final-35d11.firebasestorage.app/o/favorites.png?alt=media&token=0cb9e665-1fd0-4689-908f-2e0a9b6a8907"
              className="header__container-user_icone-favorites"
              alt="Coração Favoritos"
            />
            <div className="header__container-user_text">Favoritos</div>
          </a>
          <Link to="/cart" className="header__container-user_cart">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/web-project-final-35d11.firebasestorage.app/o/cart_icon.png?alt=media&token=bd664f00-771d-4882-acbe-14e0b83bdeab"
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
        src="https://firebasestorage.googleapis.com/v0/b/web-project-final-35d11.firebasestorage.app/o/banner.png?alt=media&token=5b798639-1926-4bff-bd4e-071137367606"
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
                src="https://firebasestorage.googleapis.com/v0/b/web-project-final-35d11.firebasestorage.app/o/desc_geleias.png?alt=media&token=7c1c79df-0c65-4d71-a4b6-ea0d3e8778c7"
                alt="Desconto Geléias"
                className="header__promo-modal__image"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/web-project-final-35d11.firebasestorage.app/o/desc_pizzas.png?alt=media&token=e1dc1d54-a40a-48b8-a5b3-888c0bbaac96"
                alt="Desconto Pizzas"
                className="header__promo-modal__image"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/web-project-final-35d11.firebasestorage.app/o/desc_queijos.png?alt=media&token=96bf7486-f2ee-416d-ae99-f2579072f3b5"
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
