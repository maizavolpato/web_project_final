import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase.js";
import Product from "../../../frontend/main/product/Product.jsx";
import ImagePopup from "../../../frontend/main/imagePopup/imagePopup.jsx";

export default function ProductList({
  selectedCategory,
  favorites,
  onProductLike,
}) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      const snapshot = await getDocs(collection(db, "products"));

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(data);
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
          />
        ))}

        {selectedProduct && (
          <ImagePopup product={selectedProduct} onClose={closePopup} />
        )}
      </div>
    </div>
  );
}
