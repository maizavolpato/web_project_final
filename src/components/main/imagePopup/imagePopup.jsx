export default function ImagePopup(props) {
  const { product, onClose } = props;

  return (
    <div className="popup" onClick={onClose}>
      <div
        className="popup__content popup__content_content-image"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        <img className="popup__image" src={product.image} alt={product.name} />
        <h3 className="popup__image-title">{product.name}</h3>
      </div>
    </div>
  );
}
