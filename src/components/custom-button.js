import './custom-button.css';

const CustomButton = ({ children, isGoogleSignInMain, isAddToCart,isHideSignUp,contactPage, ...otherProps }) => {
  return ( 
    <button 
    className={`custom-btn ${isGoogleSignInMain ? 'googleMain' : ''} ${isAddToCart ? 'cart' : ''} ${isHideSignUp ? 'hide-sign-Up' : ''} ${contactPage ? 'contact-page' : ''}`}
    {...otherProps}
    >
      {children}
    </button>
   );
}
 
export default CustomButton;