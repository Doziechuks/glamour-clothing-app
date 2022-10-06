import { BsCart } from "react-icons/bs";
import { cartHiddenAction } from "../redux/cartAction";
import { connect } from "react-redux";
import './cartIcon.css';

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="icon-wrapper" onClick={toggleCartHidden}>
      <BsCart className="cart-icon"/>
      <p className="quantity">0</p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(cartHiddenAction())
})
export default connect(null, mapDispatchToProps)(CartIcon);
