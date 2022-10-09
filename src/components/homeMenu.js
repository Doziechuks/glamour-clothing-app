import HomeItems from "./homeItems";
import './homeMenu.css';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectHomeData } from "../redux/homeSelector";

const HomeMenu = ({ data }) => {
  return ( 
    <div className="menu-wrapper">
      {
        data.map((content) => {
          return(
            <HomeItems key={content.id} {...content} />
          );
        })
      }
    </div>
   );
}
 
const mapStateToProps = createStructuredSelector({
  data: selectHomeData
})
export default connect(mapStateToProps)(HomeMenu);