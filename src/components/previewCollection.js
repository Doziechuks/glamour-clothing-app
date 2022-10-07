import './previewCollection.css';
import CustomButton from './custom-button';
import { connect } from 'react-redux';
import { setCartItem } from '../redux/cartAction';

const PreviewCollection = ({ item, setCartItem }) => {
  const { id, name, imageUrl, price } = item;
  return (
    <div className="preview-wrapper" key={id}>
      <div
        className="background"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="info">
        <h3>{name}</h3>
        <h3>${price}</h3>
      </div>
      <div className="cart">
        <CustomButton isAddToCart onClick={ () => setCartItem(item) }>add to cart</CustomButton>
      </div>
    </div>
  );
}
 
const mapDispatchToProps = (dispatch) => ({
  setCartItem: (item) => dispatch(setCartItem(item))
})
export default connect(null, mapDispatchToProps)(PreviewCollection);