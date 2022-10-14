import './contactPage.css';
import FormInput from './formInput';
import CustomButton from './custom-button';
import { useState } from 'react';

const ContactPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState('');

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setFullName('');
    setMessage('');
    setPhone('');
    
    alert('Thank you for reaching out to use!!');
  }
  return (
    <div className="contact-wrapper">
      <h1 className="contact-title">let us hear from you</h1>
      <div className="contactUs-form">
        <form onSubmit={handleSubmit} className="contact-form-wrapper">
          <FormInput
            label="Full Name"
            type="text"
            value={fullName}
            handleChange={handleFullName}
            forContactUs
            required
          />
          <FormInput
            label="Email"
            type="email"
            value={email}
            handleChange={handleEmail}
            forContactUs
            required
          />
          <FormInput
            label="Phone Number"
            type="text"
            value={phone}
            handleChange={handlePhone}
            forContactUs
            required
          />
          <div className="text-section">
            <label>Message</label>
            <textarea
              type="text"
              className="text-area"
              value={message}
              onChange={handleMessage}
              required
            />
          </div>
          <CustomButton contactPage>Submit</CustomButton>
        </form>
      </div>
    </div>
  );
}
 
export default ContactPage;