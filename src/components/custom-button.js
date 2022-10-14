import './custom-button.css';

const CustomButton = ({ children, isGoogleSignInMain, isAddToCart,isHideSignUp, ...otherProps }) => {
  return ( 
    <button 
    className={`custom-btn ${isGoogleSignInMain ? 'googleMain' : ''} ${isAddToCart ? 'cart' : ''} ${isHideSignUp ? 'hide-sign-Up' : ''}`}
    {...otherProps}
    >
      {children}
    </button>
   );
}
 
export default CustomButton;