import './previewCollection.css';

const PreviewCollection = ({ item }) => {
  const {title, id, items, } = item;
  return (
    <div className="preview-wrapper" key={id}>
      <h2>{title.toUpperCase()}</h2>
      <div className="item-box">
        {items
          .filter((item, index) => index < 4)
          .map((item) => {
            const { name, id, imageUrl, price } = item;
            return (
              <div className="items" key={id}>
                <div 
                  className="background"
                  style={{backgroundImage: `url(${imageUrl})`}}
                 />
                <div className="info">
                  <h4>{name}</h4>
                  <h4>${price}</h4>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
 
export default PreviewCollection;