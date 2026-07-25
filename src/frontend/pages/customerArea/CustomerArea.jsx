import { Link } from "react-router-dom";

export default function CostumerArea() {
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
              <Link to="custumerarea/shopping" className="dashboard__nav-link">
                Compras efetuadas
              </Link>
              <Link to="custumerarea/return" className="dashboard__nav-link">
                Devoluções
              </Link>
            </div>
            <div className="dashboard__nav-links-user">
              <Link
                to="/costumerarea/favorites"
                className="dashboard__nav-link"
              >
                <img
                  src="/images/icons/favorites.png"
                  className="dashboard__image-favorites"
                  alt="Coração Favoritos"
                />
                Favoritos
              </Link>
              <Link to="/custumerarea/cart" className="dashboard__nav-link">
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
        </div>
      </div>
      <div className="costumer-area">
        <img
          src="/images/banners/banner_costumerarea.png"
          className="costumer-area__banner"
          alt="Banner Promoções"
        />

        <div className="costumer-are__box-title">
          <img
            src="/images/icons/icon_euro.png"
            className="costumer-area__box-title__image"
            alt="Icone Euro"
          />
          Seus cupons de desconto do mês:
        </div>

        <div className="costumer-area__cupons-image">
          <div className="costumer-area__cupon-container">
            <img
              src="/images/banners/desc_geleias.png"
              className="costumer-area__image-desc"
              alt="Desconto de geléias"
            />
          </div>
          <div className="costumer-area__cupon-container">
            <img
              src="/images/banners/desc_queijos.png"
              className="costumer-area__image-desc"
              alt="Desconto de quijos"
            />
          </div>
          <div className="costumer-area__cupon-container">
            <img
              src="/images/banners/desc_pizzas.png"
              className="costumer-area__image-desc"
              alt="Desconto de pizzas"
            />
          </div>
        </div>
      </div>
    </>
  );
}
