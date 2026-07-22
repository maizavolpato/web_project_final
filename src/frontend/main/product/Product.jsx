export default function Product(props) {
  const { name, price, image } = props.products;
  const { onProductLike, isLiked, onImageClick } = props;

  const productLikeButtonClassName = `product__like-button ${
    isLiked ? "product__like-button-active" : ""
  }`;

  function handleLikeClick() {
    onProductLike(props.products);
  }

  return (
    <div className="product-item">
      <div className="product-item__image-container">
        <img
          className="product-item__image"
          src={image}
          alt={name}
          onClick={() => onImageClick(props.products)}
        />
      </div>
      <div className="product-item__body">
        <p className="product-item__title">{name}</p>
        <p className="product-item__price">{price} €</p>
        <button className="product-item__button">Comprar</button>
      </div>
      <button
        aria-label="Like card"
        type="button"
        className={productLikeButtonClassName}
        onClick={handleLikeClick}
      />
    </div>
  );
}
