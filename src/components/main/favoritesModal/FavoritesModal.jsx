import { useState, useEffect } from "react";

export default function FavoritesModal({ isOpen, onClose }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(savedFavorites);
  }, [isOpen]);

  function handleRemoveFavorite(productId) {
    const updatedFavorites = favorites.filter((fav) => fav.id !== productId);

    setFavorites(updatedFavorites);

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }

  if (!isOpen) return null;

  return (
    <>
      <div
        className={`favorites-overlay ${isOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      ></div>
      <div className={`favorites-modal ${isOpen ? "open" : ""}`}>
        <div className="favorites-modal__container">
          <h2 className="favorites-modal__title">Meus Favoritos</h2>

          <button
            aria-label="Close modal"
            className="favorites__modal__close"
            type="button"
            onClick={onClose}
          ></button>
        </div>
        <div className="favorites-modal__products">
          {favorites.length === 0 ? (
            <p className="favorides-modal__empty">Nenhum favorito ainda.</p>
          ) : (
            favorites.map((product) => (
              <div key={product.id} className="product-item">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-item__image"
                />
                <div className="product-item__body">
                  <p className="product-item__title">{product.name}</p>

                  <p className="product-item__price">{product.price} €</p>

                  <button className="product-item__button">Comprar</button>

                  <button
                    className="favorites-modal__remove-button"
                    onClick={() => handleRemoveFavorite(product.id)}
                  ></button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
