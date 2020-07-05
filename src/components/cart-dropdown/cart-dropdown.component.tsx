import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { toggleCartVisibility } from '../../store/cart/actions';

interface CartDropDownProps {
  dispatch: any;
}

const CartDropdown = ({ dispatch }: CartDropDownProps) => {
  return (
    <div className="cart-dropdown">
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={() => dispatch(toggleCartVisibility())}
      >
        &times;
      </button>
      <div className="cart-items">
        <div>h1</div>
        <div>h1</div>
        <div>h1</div>
        <div>h1</div>
        <div>h1</div>
        <div>h1</div>
        <div>h1</div>
        <div>h1</div>
        <div>h1</div>
        <div>h1</div>
        <div>h1</div>
        <div>h1</div>
        <div>h1</div>
        <div>h1</div>
        <div>h1</div>
      </div>
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
};

export default connect()(CartDropdown);
