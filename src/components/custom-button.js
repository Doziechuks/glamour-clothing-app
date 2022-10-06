import './custom-button.css';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return ( 
    <button 
    className={`btn ${isGoogleSignIn ? 'google' : ''}`}
    {...otherProps}
    >
      {children}
    </button>
   );
}
 
export default CustomButton;