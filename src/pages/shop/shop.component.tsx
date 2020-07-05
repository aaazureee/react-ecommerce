import React, { useState } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './shop.styles.scss';

export type CollectionData = {
  id: number;
  title: string;
  routeName: string;
  items: CollectionItemData[];
};

export type CollectionItemData = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number;
};

const ShopPage = () => {
  const [collections] = useState<CollectionData[]>(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...props }) => (
        <CollectionPreview key={id} {...props} />
      ))}
    </div>
  );
};

export default ShopPage;
