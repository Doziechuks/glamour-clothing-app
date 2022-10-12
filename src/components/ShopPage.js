import "./shop.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../redux/shopSelector";
import ShopCollection from "./shopCollection";

const ShopPage = ({ shopData }) => {
  return (
    <div className="shop-wrapper">
      {shopData.map((shopItem) => {
        return <ShopCollection key={shopItem.id} {...shopItem} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shopData: selectShopCollections,
});
export default connect(mapStateToProps)(ShopPage);
