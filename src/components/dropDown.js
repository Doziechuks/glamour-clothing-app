import "./dropDown.css";
import CustomButton from "./custom-button";
import CartItem from "./cartItem";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectAddCartItem } from "../redux/cartSelector";
import { cartHiddenAction } from "../redux/cartAction";
import { createStructuredSelector } from "reselect/es";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="dropdown-wrapper">
      <div className="cartContent">
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />;
          })
        ) : (
          <p className="empty">your cart is empty</p>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(cartHiddenAction());
        }}
      >
        go to check out
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectAddCartItem,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
