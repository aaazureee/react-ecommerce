import {
  CartState,
  CartActions,
  TOGGLE_CART_VISIBILITY,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  DECREMENT_CART_ITEM_QUANTITY,
  CLEAR_CART_ITEMS,
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

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload.id),
      };

    case DECREMENT_CART_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((x) => {
          if (x.id === action.payload.id) {
            return {
              ...x,
              quantity: (x.quantity as number) - 1,
            };
          }
          return x;
        }),
      };

    case CLEAR_CART_ITEMS:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};
