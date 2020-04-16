import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './styles';

const ComponentName = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt='Item' />
      <ItemDetailsContainer>
        <span className='name'>${name}</span>
        <span className='price'>${quantity} x ${price}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default ComponentName;
