import React from 'react';
import SHOP_DATA from '../../pages/shop/shop.data';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

// https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/20/06/24/GM0020062488154_0_ORGINL_20200703181323271.jpg

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
