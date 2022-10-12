import './homeItems.css';
import { withRouter } from 'react-router-dom';

const HomeItems = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return ( 
    <div className={`homeItem-wrapper ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div 
        className='background-image'
        style={{backgroundImage: `url(${imageUrl})`}}
        />
      <div className="content">
        <h1>{title.toUpperCase()}</h1>
        <p>shop now</p>
      </div>
    </div>
   );
}
 
export default withRouter(HomeItems);