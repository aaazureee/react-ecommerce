import React from 'react';
import './checkout-item.styles.scss';
import { CollectionItemData } from '../../pages/shop/shop.component';

interface CheckoutItemProps {
  cartItem: CollectionItemData;
}

const CheckoutItem = ({
  cartItem: { name, imageUrl, quantity, price },
}: CheckoutItemProps) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="checkout-item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <div className="remove-button">&times;</div>
    </div>
  );
};

export default CheckoutItem;
