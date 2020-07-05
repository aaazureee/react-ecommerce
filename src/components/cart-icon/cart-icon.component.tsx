import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartVisibility } from '../../store/cart/actions';
import './cart-icon.styles.scss';

interface CartIconProps {
  dispatch: any;
}

const CartIcon = ({ dispatch }: CartIconProps) => {
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartVisibility())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default connect()(CartIcon);
