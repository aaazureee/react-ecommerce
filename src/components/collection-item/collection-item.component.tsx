import React, { useState } from 'react';
import { CollectionItemData } from '../../pages/shop/shop.component';

import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addCartItem } from '../../store/cart/actions';

type CollectionItemProps = {
  item: CollectionItemData;
  dispatch: any;
};

const CollectionItem = ({ item, dispatch }: CollectionItemProps) => {
  const { imageUrl, name, price } = item;
  const [loading, setLoading] = useState(true);

  return (
    <div className="collection-item">
      {loading && <div className="placeholder-image gradient" />}
      <div className="image-holder">
        <img
          className="image"
          src={imageUrl}
          alt="collection-item"
          onLoad={() => setLoading(false)}
          style={{
            display: loading ? 'none' : 'block',
          }}
        />
      </div>

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>

      <CustomButton inverted onClick={() => dispatch(addCartItem(item))}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default connect()(CollectionItem);
