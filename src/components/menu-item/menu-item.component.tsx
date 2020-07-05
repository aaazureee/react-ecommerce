import React, { useState } from 'react';
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
  const [loading, setLoading] = useState(true);
  return (
    <div
      className={`menu-item ${size ? size : ''} ${loading ? 'no-border' : ''}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      {loading && <div className="placeholder-image gradient" />}
      <img
        src={imageUrl}
        alt="menu-item"
        className="background-image"
        style={{
          display: loading ? 'none' : 'block',
        }}
        onLoad={() => setLoading(false)}
      />
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
