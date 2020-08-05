import React from 'react';
import './checkout-item.styles.scss';
import { CollectionItemData } from '../../pages/shop/shop.component';
import { connect } from 'react-redux';
import {
  removeCartItem,
  decrementCartItem,
  addCartItem,
} from '../../store/cart/actions';

interface CheckoutItemProps {
  cartItem: CollectionItemData;
  dispatch: any;
}

const CheckoutItem = ({ cartItem, dispatch }: CheckoutItemProps) => {
  const { name, imageUrl, quantity, price, id } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="checkout-item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            if (quantity === 1) {
              dispatch(removeCartItem(id));
            } else {
              dispatch(decrementCartItem(id));
            }
          }}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addCartItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(removeCartItem(id))}
      >
        &times;
      </div>
    </div>
  );
};

export default connect()(CheckoutItem);
