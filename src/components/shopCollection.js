import './shopCollection.css';
import ShopData from "./shopData";
import PreviewCollection from './previewCollection';

const ShopCollection = () => {
  
  return ( 
    <div className="collection-wrapper">
      {
        ShopData.map((item) => {
          return <PreviewCollection key={item.id} item={item} />
        })
      }
    </div>
   );
}
 
export default ShopCollection;