import React, { useState } from 'react';
import { CollectionItemData } from '../../pages/shop/shop.component';

import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addCartItem } from '../../store/cart/actions';
import { toast } from 'react-toastify';

type CollectionItemProps = {
  item: CollectionItemData;
  dispatch: any;
};

const CollectionItem = ({ item, dispatch }: CollectionItemProps) => {
  const { imageUrl, imageUrl2, name, price } = item;
  const [loading, setLoading] = useState(0);

  const [hoverHelper, setHoverHelper] = useState(false);
  return (
    <div className="collection-item">
      {loading !== 2 && <div className="placeholder-image gradient" />}
      <div className={`image-holder ${loading !== 2 ? 'image-loading' : ''}`}>
        <img
          className="image"
          src={imageUrl}
          alt="collection-item"
          onLoad={() => setLoading((c) => c + 1)}
          style={{
            display: loading !== 2 ? 'none' : 'block',
          }}
        />
        <img
          className={`image-2 ${hoverHelper ? 'hover-helper' : ''}`}
          onMouseOver={() => setHoverHelper(true)}
          onMouseOut={() => setHoverHelper(false)}
          src={imageUrl2}
          alt="collection-item-2"
          onLoad={() => setLoading((c) => c + 1)}
          style={{
            display: loading !== 2 ? 'none' : 'block',
          }}
        />
      </div>

      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">${price.toFixed(2)}</div>
      </div>

      <CustomButton
        onMouseOver={() => setHoverHelper(true)}
        inverted
        onClick={() => {
          toast(
            <div>
              <span role="img" aria-label="cart">
                🛒
              </span>{' '}
              {name} is added to your cart.
            </div>
          );
          dispatch(addCartItem(item));
        }}
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

export default connect()(CollectionItem);
