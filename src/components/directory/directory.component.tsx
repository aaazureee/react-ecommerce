import React from 'react';
import SHOP_DATA from '../../pages/shop/shop.data';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const sections = SHOP_DATA;

const Directory = () => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))}
    </div>
  );
};

export default Directory;
