import React from 'react';

import './cart-item.styles.scss';
import { CollectionItemData } from '../../pages/shop/shop.component';

interface CartItemProps {
  item: CollectionItemData;
}

const CartItem = ({
  item: { imageUrl, name, price, quantity },
}: CartItemProps) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="cart-item-img" />
      <div className="cart-item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
