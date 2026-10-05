import { useEffect, useState } from "react";
import Product from "../../../frontend/main/product/Product.jsx";
import ImagePopup from "../imagePopup/ImagePopup.jsx";

export default function ProductList({
  selectedCategory,
  favorites,
  onProductLike,
  onBuyProduct,
}) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:3000/api/products");

        if (!response.ok) {
          throw new Error("Erro ao buscar produtos");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    }

    fetchProducts();
  }, []);

  function getFilteredProducts() {
    if (selectedCategory === "all") {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  }

  function handleImageClick(product) {
    setSelectedProduct(product);
  }

  function closePopup() {
    setSelectedProduct(null);
  }

  return (
    <div className="products">
      <div className="products__container">
        {getFilteredProducts().map((prod) => (
          <Product
            key={prod.id}
            products={prod}
            isLiked={favorites.some((favorite) => favorite.id === prod.id)}
            onProductLike={onProductLike}
            onImageClick={handleImageClick}
            onBuyProduct={onBuyProduct}
          />
        ))}

        {selectedProduct && (
          <ImagePopup product={selectedProduct} onClose={closePopup} />
        )}
      </div>
    </div>
  );
}
