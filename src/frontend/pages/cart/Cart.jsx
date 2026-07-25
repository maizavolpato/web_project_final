import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Cart() {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    setCartProducts(savedCart);
  }, []);

  function handleRemoveCart(productId) {
    const updatedCart = cartProducts.filter(
      (product) => product.id !== productId,
    );

    setCartProducts(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
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
              <Link to="customerarea/shopping" className="dashboard__nav-link">
                Compras efetuadas
              </Link>
              <Link to="customerarea/return" className="dashboard__nav-link">
                Devoluções
              </Link>
            </div>
            <div className="dashboard__nav-links-user">
              <Link to="/customerarea" className="dashboard__nav-link">
                <img
                  src="/images/icons/user_icon.png"
                  className="dashboard__image-user"
                  alt="User"
                />
                Minha página
              </Link>
              <Link
                to="/customerarea/favorites"
                className="dashboard__nav-link"
              >
                <img
                  src="/images/icons/favorites.png"
                  className="dashboard__image-favorites"
                  alt="Favoritos"
                />
                Favoritos
              </Link>
              <input
                type="text"
                placeholder="Pesquisar produtos"
                className="dashboard__input"
              />
            </div>
          </nav>
        </div>
      </div>
      <div className="cart">
        <div className="cart__title-container">
          <img
            src="/images/icons/cart_icon.png"
            alt="Carrinho Ícone"
            className="cart__image"
          />
          <h4 className="cart__title">Suas compras</h4>
        </div>
        <div className="cart__products">
          {cartProducts.map((product) => (
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
                <button
                  className="cart__remove-button"
                  onClick={() => handleRemoveCart(product.id)}
                ></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
