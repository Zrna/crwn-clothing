import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../store/shop/shop.selectors';

import './styles.scss';

// eslint-disable-next-line no-unused-vars
import CollectionItem from '../../components/CollectionItem';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
