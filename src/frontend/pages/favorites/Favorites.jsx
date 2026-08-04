import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  function handleRemoveFavorite(productId) {
    const updatedFavorites = favorites.filter((fav) => fav.id !== productId);

    setFavorites(updatedFavorites);

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(savedFavorites);
  }, []);

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
              <Link to="/shopping" className="dashboard__nav-link">
                Compras efetuadas
              </Link>
              <Link to="/return" className="dashboard__nav-link">
                Devoluções
              </Link>
            </div>
            <div className="dashboard__nav-links-user">
              <Link to="/costumerarea" className="dashboard__nav-link">
                <img
                  src="/images/icons/user_icon.png"
                  className="dashboard__image-user"
                  alt="User"
                />
                Minha página
              </Link>
              <Link to="/costumerarea/cart" className="dashboard__nav-link">
                <img
                  src="/images/icons/cart_icon.png"
                  className="dashboard__image-cart"
                  alt="Carrinho"
                />
                Carrinho
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <div className="favorites">
        <div className="favorites__title-container">
          <img
            src="/images/icons/favorites.png"
            alt="Favorito Ícone"
            className="favorites__image"
          />
          <h4 className="favorites__title">Seus Favoritos</h4>
        </div>
        <div className="favorites__products">
          {favorites.map((product) => (
            <div key={product.id} className="product-item">
              <div className="product-item__image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-item__image"
                />
              </div>
              <div className="product-item__body">
                <p className="product-item__title">{product.name}</p>
                <p className="product-item__price">{product.price} €</p>
                <button className="product-item__button">Comprar</button>
                <button
                  className="favorites__remove-button"
                  onClick={() => handleRemoveFavorite(product.id)}
                ></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
