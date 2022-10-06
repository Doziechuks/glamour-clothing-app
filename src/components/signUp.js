import './signUp.css';
import FormInput from './formInput';
import CustomButton from './custom-button';
import { auth, checkUser } from '../firebase/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      alert('password do not match')
    }
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await checkUser(user, { FullName: displayName });
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setDisplayName("");
    } catch (error) {
      console.log(error.message)
    }
  }
  const handleFullName = (e) => {
    setDisplayName(e.target.value)
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="signUp-wrapper">
      <FormInput
        label="Full Name"
        value={displayName}
        type="text"
        handleChange={handleFullName}
        required
      />
      <FormInput
        label="Email"
        value={email}
        type="email"
        handleChange={handleEmail}
        required
      />
      <FormInput
        label="Password"
        value={password}
        type="password"
        handleChange={handlePassword}
        required
      />
      <FormInput
        label="Confirm Password"
        value={confirmPassword}
        type="password"
        handleChange={handleConfirmPassword}
        required
      />
      <CustomButton>sign up</CustomButton>
    </form>
  );
}
 
export default SignUp;