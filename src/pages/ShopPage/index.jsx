import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../store/shop/shop.selectors';

import CollectionPreview from '../../components/CollectionPreview';

const ShopPage = ({ collections }) => {
  return (
    <div className='shop-page'>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});


export default connect(mapStateToProps)(ShopPage);
