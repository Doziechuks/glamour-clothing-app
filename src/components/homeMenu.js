import data from "./homeData";
import HomeItems from "./homeItems";
import './homeMenu.css';

const HomeMenu = () => {
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
 
export default HomeMenu;