import './custom-button.css';

const CustomButton = ({ children, isGoogleSignIn, isAddToCart, ...otherProps }) => {
  return ( 
    <button 
    className={`btn ${isGoogleSignIn ? 'google' : ''} ${isAddToCart ? 'cart' : ''}`}
    {...otherProps}
    >
      {children}
    </button>
   );
}
 
export default CustomButton;