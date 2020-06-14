import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import './menu-item.styles.scss';

type MenuItemProps = {
  title: string;
  imageUrl: string;
  size?: string;
  subtitle?: string;
  linkUrl: string;
} & RouteComponentProps;

const MenuItem = ({
  title,
  subtitle = 'SHOP NOW',
  imageUrl,
  size,
  linkUrl,
  history,
  match,
}: MenuItemProps) => {
  return (
    <div
      className={`menu-item ${size ? size : ''}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuItem);
