import './dropDown.css'
import CustomButton from "./custom-button";
import CartItem from './cartItem';
import { connect } from "react-redux";
import { selectAddCartItem } from "../redux/cartSelector";
import { createStructuredSelector } from "reselect/es";

const CartDropdown = ({ cartItems }) => {
       return (
    <div className="dropdown-wrapper">
      <div className="cartContent">
        {
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />
          })
        }
      </div>
      <CustomButton>go to check out</CustomButton>
    </div>
  );
   
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectAddCartItem,
});
 
export default connect(mapStateToProps)(CartDropdown);