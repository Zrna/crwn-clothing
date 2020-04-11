import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../store/shop/shop.selectors';

import './styles.scss';

import CollectionItem from '../../components/CollectionItem';

const CollectionPage = ({ collection }) => {
  console.log('collection is:', collection);
  return (
    <div className='collection-page'>
      <h2>collection page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);