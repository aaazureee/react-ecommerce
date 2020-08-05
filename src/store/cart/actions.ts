import {
  CartActions,
  TOGGLE_CART_VISIBILITY,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  DECREMENT_CART_ITEM_QUANTITY,
  CLEAR_CART_ITEMS,
} from './types';
import { CollectionItemData } from '../../pages/shop/shop.component';

export const toggleCartVisibility = (): CartActions => ({
  type: TOGGLE_CART_VISIBILITY,
});

export const addCartItem = (item: CollectionItemData): CartActions => ({
  type: ADD_CART_ITEM,
  payload: {
    item,
  },
});

export const removeCartItem = (id: number): CartActions => ({
  type: REMOVE_CART_ITEM,
  payload: {
    id,
  },
});

export const decrementCartItem = (id: number): CartActions => ({
  type: DECREMENT_CART_ITEM_QUANTITY,
  payload: {
    id,
  },
});

export const clearCartItems = (): CartActions => ({
  type: CLEAR_CART_ITEMS,
});
