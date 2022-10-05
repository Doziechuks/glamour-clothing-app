import './formInput.css';

const FormInput = ({ label, handleChange, ...otherProps }) => {
  return ( 
    <div className="input-wrapper">
      <label className='input-label'>{label}</label>
      <input className='input' onChange={handleChange} {...otherProps} />
    </div>
   );
}
 
export default FormInput;