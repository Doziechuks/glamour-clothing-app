import './formInput.css';

const FormInput = ({ label, handleChange,forContactUs, ...otherProps }) => {
  return ( 
    <div className="input-wrapper">
      <label className='input-label'>{label}</label>
      <input className={`input ${forContactUs ? 'contact-form' : ''}`} onChange={handleChange} {...otherProps} />
    </div>
   );
}
 
export default FormInput;