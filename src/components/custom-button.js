import './custom-button.css';

const CustomButton = ({ children, isGoogleSignIn, isMobile, ...otherProps }) => {
  return ( 
    <button 
    className={`btn ${isGoogleSignIn ? 'google' : ''} ${isMobile ? 'mobile' : ''}`}
    {...otherProps}
    >
      {children}
    </button>
   );
}
 
export default CustomButton;