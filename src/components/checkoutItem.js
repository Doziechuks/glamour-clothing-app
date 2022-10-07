import './checkoutItem.css';

const CheckoutItem = ({ cartItem }) => {
  const {imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkoutItem-wrapper">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <p className="name">{name}</p>
      <p className="num">{quantity}</p>
      <p className="price">${price}</p>
      <div className="remove-button">&#10006;</div>
    </div>
  );
}
 
export default CheckoutItem;