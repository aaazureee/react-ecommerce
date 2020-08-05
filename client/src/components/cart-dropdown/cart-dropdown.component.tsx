import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { toggleCartVisibility } from '../../store/cart/actions';
import { RootState } from '../../store';
import { CollectionItemData } from '../../pages/shop/shop.component';
import CartItem from '../cart-item/cart-item.component';
import { useHistory } from 'react-router-dom';

interface CartDropDownProps {
  cartItems: CollectionItemData[];
  dispatch: any;
}

const CartDropdown = ({ cartItems, dispatch }: CartDropDownProps) => {
  const history = useHistory();
  return (
    <div className="cart-dropdown">
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={() => dispatch(toggleCartVisibility())}
      >
        &times;
      </button>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <div className="empty-cart-msg">Your cart is empty</div>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggleCartVisibility());
          history.push('/checkout');
        }}
      >
        CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }: RootState) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
