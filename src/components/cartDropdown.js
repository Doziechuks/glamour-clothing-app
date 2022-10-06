import './cartDropdown.css';
import CustomButton from './custom-button';

const cartDropdown = () => {
  return (
    <div className="cartItem-wrapper">
      <div className="cart-content"></div>
      <CustomButton>go to check out</CustomButton>
    </div>
  );
}
 

export default cartDropdown;