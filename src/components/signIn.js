import "./signIn.css";
import { Link } from "react-router-dom";
import FormInput from "./formInput";
import CustomButton from "./custom-button";
import { FcGoogle } from "react-icons/fc";
import { googleSignIn, auth } from "../firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
       setEmail("");
       setPassword("");
    } catch (error) {
      console.log(error.message)
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FormInput
        label="Email"
        type="email"
        handleChange={handleEmail}
        value={email}
        required
      />

      <FormInput
        label="Password"
        type="password"
        handleChange={handlePassword}
        value={password}
        required
      />
      <div className="btn-wrapper">
        <CustomButton>sign in</CustomButton>
        <CustomButton isGoogleSignIn onClick={googleSignIn}>
          <FcGoogle className="google" />
          sign in with google
        </CustomButton>
        <Link to= '/signUp' className="signup-link">
          <CustomButton type="submit">
            sign up
          </CustomButton>
        </Link>
      </div>
    </form>
  );
};

export default SignIn;
