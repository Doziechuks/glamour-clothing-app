import './collectionPage.css';
import { selectCollection } from '../redux/shopSelector';
import { connect } from 'react-redux';
import PreviewCollection from './previewCollection';

const CollectionPage = ({ collection }) => {
  const { title, items} = collection;
  return (
    <div className="collectionPage-wrapper">
      <h2 className='collection-title'>{ title.toUpperCase() }</h2>
      <div className="collectionPage-items">
        {
          items.map((item) => {
            return <PreviewCollection key={item.id} item={item} />;
          })
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);