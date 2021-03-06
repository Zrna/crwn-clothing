import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../store/shop/shop.selectors';

import { CollectionsOverviewContainer } from './styles';

import CollectionPreview from '../CollectionPreview';

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
