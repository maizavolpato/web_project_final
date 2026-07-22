import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import FavoritesModal from "../../main/favoritesModal/FavoritesModal.jsx";

export default function About() {
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const navigate = useNavigate();

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
            </ul>
          </nav>
          <div className="header__container-user">
            <div className="header__container-user_block">
              <img
                src="/images/icons/user_icon.png"
                alt="User Ícone"
                className="header__container-user_icone-user"
              />
              <Link to="/login" className="header__container-user_text">
                Entrar
                <div className="header__container-user_text-sec">
                  {" "}
                  ou cadastrar{" "}
                </div>
              </Link>
            </div>
          </div>
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
      <section className="about">
        <h1 className="about__title">Sobre Nós</h1>

        <div className="about__text">
          <p>
            Somos uma empresa apaixonada por inovação, sustentabilidade e
            respeito à vida.
          </p>
          Nosso objetivo é mostrar que é possível consumir produtos saborosos,
          modernos e de alta qualidade sem precisar explorar os animais.
          Acreditamos que o veganismo vai muito além da alimentação: é um estilo
          de vida consciente que traz benefícios para os animais, para o meio
          ambiente e também para a saúde das pessoas. Cada escolha faz
          diferença, e queremos tornar essa mudança mais acessível e prazerosa
          para todos.
          <p>
            Hoje, a tecnologia e a criatividade permitiram o desenvolvimento de
            inúmeros produtos veganos com sabores, texturas e experiências muito
            parecidas com os produtos tradicionais. Isso prova que podemos
            continuar aproveitando comidas deliciosas sem causar sofrimento
            animal.
          </p>
          Nossa missão é conscientizar cada vez mais pessoas de que pequenas
          atitudes podem gerar grandes impactos positivos no mundo. Trabalhamos
          para oferecer alternativas veganas inovadoras, saborosas e
          sustentáveis, incentivando um consumo mais responsável e compassivo.
          Acreditamos em um futuro onde sabor, saúde e respeito caminham juntos.
        </div>
        <img
          src="/images/banners/group_picture.png"
          alt="Foto do Grupo Verde Vivo"
          className="about__image"
        />
      </section>
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
                src="/images/banners/desc_geleias.png"
                alt="Desconto Geléias"
                className="header__promo-modal__image"
              />
              <img
                src="/images/banners/desc_pizzas.png"
                alt="Desconto Pizzas"
                className="header__promo-modal__image"
              />
              <img
                src="/images/banners/desc_queijos.png"
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
    </>
  );
}
