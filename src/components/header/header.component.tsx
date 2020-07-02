import React, { useContext } from 'react';

import './header.styles.scss';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import { auth } from '../../firebase/firebase.utils';

const Header = () => {
  const { user } = useContext(UserContext);

  const signOut = async () => {
    await auth.signOut();
  };

  return (
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
        {user ? (
          <>
            <div className="option">{user.displayName}</div>
            <div className="option sign-out" onClick={signOut}>
              SIGN OUT
            </div>
          </>
        ) : (
          <Link className="option" to="/sign-in">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
