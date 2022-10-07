import { BsCart } from "react-icons/bs";
import { cartHiddenAction } from "../redux/cartAction";
import { selectCartItemCount } from "../redux/cartSelector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import './cartIcon.css';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="icon-wrapper" onClick={toggleCartHidden}>
      <BsCart className="cart-icon"/>
      <p className="quantity">{itemCount}</p>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
})
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(cartHiddenAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
