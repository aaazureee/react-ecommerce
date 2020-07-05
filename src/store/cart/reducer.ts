import {
  CartState,
  CartActions,
  TOGGLE_CART_VISIBILITY,
  ADD_CART_ITEM,
} from './types';
import { addCartItemHelper } from './util';

const initialState: CartState = {
  cartItems: [],
  hidden: true,
};

export const cartReducer = (
  state = initialState,
  action: CartActions
): CartState => {
  switch (action.type) {
    case TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addCartItemHelper(state.cartItems, action.payload.item),
      };

    default:
      return state;
  }
};
