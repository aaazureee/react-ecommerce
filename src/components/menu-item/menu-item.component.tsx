import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import './menu-item.styles.scss';

type MenuItemProps = {
  title: string;
  thumbnail: string;
  routeName: string;
} & RouteComponentProps;

const MenuItem = ({ title, thumbnail, routeName, history }: MenuItemProps) => {
  const [loading, setLoading] = useState(true);
  return (
    <div
      className={`menu-item`}
      onClick={() => history.push(`/shop/${routeName}`)}
    >
      {loading && <div className="placeholder-image gradient" />}
      <img
        src={thumbnail}
        alt="menu-item"
        className="background-image"
        style={{
          display: loading ? 'none' : 'block',
        }}
        onLoad={() => setLoading(false)}
      />
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
