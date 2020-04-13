import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../store/cart/cart.actions';
import { selectCartItemsCount } from '../../store/cart/cart.selectors';

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartContainer className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
