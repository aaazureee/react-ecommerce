import React from 'react';
import { CollectionItemData } from '../../pages/shop/shop.component';

import './collection-item.styles.scss';

type CollectionItemProps = Omit<CollectionItemData, 'id'>;

const CollectionItem = ({ name, imageUrl, price }: CollectionItemProps) => {
  return (
    <div className="collection-item">
      <img
        className="image"
        src={imageUrl}
        alt="collection-item"
        // style={{
        //   backgroundImage: `url(${imageUrl})`,
        // }}
      />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
