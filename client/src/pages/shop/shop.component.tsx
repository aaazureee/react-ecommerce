import React, { useState } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';
import './shop.styles.scss';

export type CollectionData = {
  id: number;
  title: string;
  routeName: string;
  thumbnail: string;
  items: CollectionItemData[];
};

export type CollectionItemData = {
  id: number;
  name: string;
  imageUrl: string;
  imageUrl2?: string;
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
