import './homeItems.css';

const HomeItems = ({ title, imageUrl, size }) => {
  return ( 
    <div className={`homeItem-wrapper ${size}`}>
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
 
export default HomeItems;