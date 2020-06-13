import React from 'react';

import './menu-item.styles.scss';

type MenuItemProps = {
  title: string;
  imageUrl: string;
  size?: string;
} & typeof MenuItemDefaultProps;

const MenuItemDefaultProps = {
  subtitle: 'SHOP NOW',
};

const MenuItem = ({ title, subtitle, imageUrl, size }: MenuItemProps) => {
  return (
    <div className={`menu-item ${size ? size : ''}`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
};

MenuItem.defaultProps = MenuItemDefaultProps;

export default MenuItem;
