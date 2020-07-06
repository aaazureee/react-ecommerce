import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartVisibility } from '../../store/cart/actions';
import './cart-icon.styles.scss';
import { RootState } from '../../store';
import { cartItemsCountSelector } from '../../store/cart/selectors';

interface CartIconProps {
  totalCount: number;
  dispatch: any;
}

const CartIcon = ({ totalCount, dispatch }: CartIconProps) => {
  useEffect(() => {
    console.log('cart icon re-render');
  });

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartVisibility())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalCount}</span>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    totalCount: cartItemsCountSelector(state),
  };
};

export default connect(mapStateToProps)(CartIcon);
