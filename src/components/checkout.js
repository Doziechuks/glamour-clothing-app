import './checkout.css';
import CheckoutItem from './checkoutItem';
import PayStackBtn from '../payStack/payStack';
import { connect } from 'react-redux';
import { selectAddCartItem } from '../redux/cartSelector';
import { selectCartTotalPrice } from '../redux/cartSelector';
import { createStructuredSelector } from 'reselect';

const CheckoutPage = ({ cartItems, total }) => {
  return (
    
    <div className="checkout-wrapper">
      <div className="checkout-header">
        <div className="header-block">
          <p>product</p>
        </div>
        <div className="header-block">
          <p>description</p>
        </div>
        <div className="header-block">
          <p>quantity</p>
        </div>
        <div className="header-block">
          <p>price</p>
        </div>
        <div className="header-block">
          <p>remove</p>
        </div>
      </div>
      {
        cartItems.length ? 
        cartItems.map((cartItem) => {
          return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        })
        : <p className='cart-empty'>your Cart is empty</p>
      }
      <div className="total">
        <p>TOTAL: ${total}</p>
      </div>
      <PayStackBtn price={total} />
    </div>
  );
}
 
const mapStateToProps = createStructuredSelector({
  cartItems: selectAddCartItem,
  total: selectCartTotalPrice
})
export default connect(mapStateToProps)(CheckoutPage);