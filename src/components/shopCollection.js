import './shopCollection.css';
import PreviewCollection from './previewCollection';

const ShopCollection = ({ title, items }) => {
  return (
    <div className="collection-wrapper">
      <h2>{title.toUpperCase()}</h2>
      <div className="preview">
        {items.filter((item, index) => index < 4).map((item) => {
          return <PreviewCollection key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
 
export default ShopCollection;