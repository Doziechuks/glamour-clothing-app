import './checkoutItem.css';
import { clearItemFromCart, setCartItem, removeItemFromCart } from '../redux/cartAction';
import { connect } from 'react-redux';

const CheckoutItem = ({ cartItem, clearCartItem, addItem, removeItem }) => {
  const {imageUrl, name, price, quantity } = cartItem;
  return (
    
    <div className="checkoutItem-wrapper">
      
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <p className="name">{name}</p>
      <p className="num">
        <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
        <div className="quant">{quantity}</div>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </p>
      <p className="price">${price}</p>
      <div className="remove-button">
        <div className="utf" onClick={() => clearCartItem(cartItem)}>
          &#10006;
        </div>
      </div>
      {/* for mobile view */}
      <p className="name for-mobile">Description: {name}</p>
      <p className="num for-mobile arrows">
        <div>Quantity:</div>
        <div className='mobile-arrow'>
          <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
          <div className="quant">{quantity}</div>
          <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
        </div>
      </p>
      <p className="price for-mobile">Price: ${price}</p>
      <div
        className="remove-button for-mobile"
        onClick={() => clearCartItem(cartItem)}
      >
        Remove: &#10006;
      </div>
    </div>
  );
}
 
const mapDispatchToProps = (dispatch) => ({
  clearCartItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(setCartItem(item)),
  removeItem: (item) => dispatch(removeItemFromCart(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);