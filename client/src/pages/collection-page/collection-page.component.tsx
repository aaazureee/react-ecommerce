import React from 'react';
import './collection-page.styles.scss';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import SHOP_DATA from '../shop/shop.data';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({
  match,
}: RouteComponentProps<{ category: string }>) => {
  const category = match.params.category;
  const data = SHOP_DATA.find((x) => x.routeName === category);

  if (data) {
    const { title, items } = data;
    return (
      <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
          {items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }

  return <Redirect to="/404" />;
};

export default CollectionPage;
