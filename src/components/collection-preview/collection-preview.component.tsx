import React from 'react';
import { CollectionData } from '../../pages/shop/shop.component';

import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';
import { Link } from 'react-router-dom';

type CollectionPreviewProps = Omit<CollectionData, 'id'>;

const CollectionPreview = ({
  title,
  items,
  routeName,
}: CollectionPreviewProps) => {
  return (
    <div className="collection-preview">
      <h1 className="title">
        <Link to={`/shop/${routeName}`}>{title.toUpperCase()}</Link>
      </h1>

      <div className="preview">
        {items.slice(0, 4).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
