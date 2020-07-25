import React from 'react';
import './checkout.styles.scss';
import { CollectionItemData } from '../shop/shop.component';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { cartItemsTotalPriceSelector } from '../../store/cart/selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

interface CheckoutProps {
  cartItems: CollectionItemData[];
  totalPrice: string;
  dispatch: any;
}

const Checkout = ({ cartItems, totalPrice, dispatch }: CheckoutProps) => {
  console.log(totalPrice);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${totalPrice}</div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  cartItems: state.cart.cartItems,
  totalPrice: cartItemsTotalPriceSelector(state),
});

export default connect(mapStateToProps)(Checkout);
