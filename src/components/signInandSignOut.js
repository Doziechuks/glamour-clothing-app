import SignIn from "./signIn";
import SignUp from "./signUp";
import './signInandSignOut.css';

const SignInandSignOut = () => {
  return (
    <div className="signinandout">
      <SignIn />
      <div className="phone">
        <SignUp />
      </div>
    </div>
  );
}
 
export default SignInandSignOut;