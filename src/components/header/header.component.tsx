import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import { signOutFirebase } from '../../store/user/thunks';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import './header.styles.scss';

interface HeaderProps {
  userDisplayName: string;
  cartHidden: boolean;
  dispatch: any;
}

const Header = ({ userDisplayName, cartHidden, dispatch }: HeaderProps) => {
  const signOut = async () => {
    dispatch(signOutFirebase());
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
        {userDisplayName ? (
          <>
            <div className="option">{userDisplayName}</div>
            <div className="option sign-out" onClick={signOut}>
              SIGN OUT
            </div>
          </>
        ) : (
          <Link className="option" to="/sign-in">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!cartHidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({
  user: { currentUser },
  cart: { hidden },
}: RootState) => ({
  userDisplayName: currentUser?.displayName as string,
  cartHidden: hidden,
});

export default connect(mapStateToProps)(Header);
