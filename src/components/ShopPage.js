import "./shop.css";
import ShopData from "./shopData";
import ShopCollection from "./shopCollection";

const ShopPage = () => {
  return (
    <div className="shop-wrapper">
      {ShopData.map((shopItem) => {
        return <ShopCollection key={shopItem.id} {...shopItem} />;
      })}
    </div>
  );
  
};

export default ShopPage;
