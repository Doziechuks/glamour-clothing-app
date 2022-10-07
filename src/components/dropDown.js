import './dropDown.css'
import CustomButton from "./custom-button";
import { connect } from "react-redux";
import { selectAddCartItem } from "../redux/cartSelector";
import { createStructuredSelector } from "reselect/es";


const CartDropdown = ({ cartItems }) => {
       return (
    <div className="cartItem-wrapper">
      <div className="cart-content">
        <div className="container">
          {
            cartItems.map((cartItem) => {
              const { quantity, name, imageUrl, id, price} = cartItem;
              return (
                <div className="wrapper" key={id}>
                  <h1>{name}</h1>
                </div>
              );
            })
          }
        </div>
      </div>
      <CustomButton>go to check out</CustomButton>
    </div>
  );
   
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectAddCartItem,
});
 
export default connect(mapStateToProps)(CartDropdown);