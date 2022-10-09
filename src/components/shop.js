import './shop.css';
import ShopCollection from './shopCollection';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../redux/shopSelector';

const ShopPage = ({ ShopData}) => {
  return ( 
    <div className="shop-wrapper">
      {
        ShopData.map((shopItem) => {
          return <ShopCollection key={shopItem.id} {...shopItem} />
        })
      }
    </div>
   );
}
 
const mapStateToProps = createStructuredSelector({
  ShopData: selectShopCollections
})
export default connect(mapStateToProps)(ShopPage);