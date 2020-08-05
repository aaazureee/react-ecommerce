import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { RootState } from '../../store';
import { toggleCartVisibility } from '../../store/cart/actions';
import { cartItemsCountSelector } from '../../store/cart/selectors';
import './cart-icon.styles.scss';

interface CartIconProps {
  totalCount: number;
  dispatch: any;
}

const CartIcon = ({ totalCount, dispatch }: CartIconProps) => {
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
