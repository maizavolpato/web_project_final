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
              src="https://firebasestorage.googleapis.com/v0/b/web-project-final-35d11.firebasestorage.app/o/logo.png?alt=media&token=ad64daf8-0fef-4c29-91a2-80a2d08436a9"
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
                src="https://firebasestorage.googleapis.com/v0/b/web-project-final-35d11.firebasestorage.app/o/user_icon.png?alt=media&token=88e578c9-45f8-4c2e-a4e1-5b57fb460c9b"
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
          src="https://firebasestorage.googleapis.com/v0/b/web-project-final-35d11.firebasestorage.app/o/group_picture.png?alt=media&token=6f3fdef9-e420-4c65-9f98-c7a376d5d546"
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
    </>
  );
}
