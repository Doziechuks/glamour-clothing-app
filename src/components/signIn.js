import "./signIn.css";
import { Link } from "react-router-dom";
import FormInput from "./formInput";
import CustomButton from "./custom-button";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
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
        <CustomButton type="submit">sign in</CustomButton>
        <CustomButton isGoogleSignIn>
          <FcGoogle className="google" />
          sign in with google
        </CustomButton>
        <Link to= '/sign up' className="singup-link">
          <CustomButton type="submit" isMobile>
            sign up
          </CustomButton>
        </Link>
      </div>
    </form>
  );
};

export default SignIn;
