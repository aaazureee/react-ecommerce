import React from 'react';
import './checkout.styles.scss';
import { CollectionItemData } from '../shop/shop.component';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { cartItemsTotalPriceSelector } from '../../store/cart/selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

interface CheckoutProps {
  cartItems: CollectionItemData[];
  totalPrice: string;
}

const Checkout = ({ cartItems, totalPrice }: CheckoutProps) => {
  return (
    <div className="checkout-page">
      {cartItems.length ? (
        <>
          <div className="checkout-header">
            <div className="header-block">
              <span>Product</span>
            </div>
            <div className="header-block name">
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
          <div className="test-warning">
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
          </div>
          <StripeCheckoutButton price={totalPrice} />
        </>
      ) : (
        <div className="empty-cart-msg">Your cart is empty!</div>
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  cartItems: state.cart.cartItems,
  totalPrice: cartItemsTotalPriceSelector(state),
});

export default connect(mapStateToProps)(Checkout);
