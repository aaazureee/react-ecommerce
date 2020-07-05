import { CartActions, TOGGLE_CART_VISIBILITY, ADD_CART_ITEM } from './types';
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
