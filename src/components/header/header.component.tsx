import React from 'react';

import './header.styles.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img
        src="https://rerollcdn.com/SDSGC/ui/piggy_neutral.png"
        className="logo"
        alt="logo"
      />
      <div
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          letterSpacing: 0.5,
          marginLeft: 10,
        }}
      >
        REACT ECOMMERCE
      </div>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      {/* <div className="option">Hieu Chu</div> */}
      <Link className="option" to="/sign-in">
        SIGN IN
      </Link>
    </div>
  </div>
);

export default Header;
