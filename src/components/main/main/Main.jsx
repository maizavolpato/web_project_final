import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../productList/ProductList.jsx";

export default function Main() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  function handleProductLike(product) {
    const user = localStorage.getItem("user");

    if (!user) {
      navigate("/login");
      return;
    }
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.id === product.id);

      let updateFavorites;

      if (isFavorite) {
        return (updateFavorites = prevFavorites.filter(
          (fav) => fav.id !== product.id,
        ));
      } else {
        updateFavorites = [...prevFavorites, product];
      }
      localStorage.setItem("favorites", JSON.stringify(updateFavorites));
      return updateFavorites;
    });
  }

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(savedFavorites);
  }, []);

  return (
    <>
      <section className="list-buttons">
        <button
          className="list-buttons__all-category"
          onClick={() => setSelectedCategory("all")}
        >
          Todos os produtos
        </button>
        <button
          className="list-buttons__category"
          onClick={() => setSelectedCategory("Mercearia")}
        >
          Mercearia
        </button>
        <button
          className="list-buttons__category"
          onClick={() => setSelectedCategory("Refrigerados")}
        >
          Refrigerados
        </button>
        <button
          className="list-buttons__category"
          onClick={() => setSelectedCategory("Congelados")}
        >
          Congelados
        </button>
        <button
          className="list-buttons__category"
          onClick={() => setSelectedCategory("Doces")}
        >
          Doces
        </button>
      </section>
      <div className="products__box">
        <img
          src="../../images/products_icon.png"
          alt="Products icon"
          className="products__box-icon"
        />
        <p className="products__box-title" id="products">
          Nossos produtos
        </p>
      </div>
      <ProductList
        selectedCategory={selectedCategory}
        favorites={favorites}
        onProductLike={handleProductLike}
      />
    </>
  );
}
