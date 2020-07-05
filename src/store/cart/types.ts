import { CollectionItemData } from '../../pages/shop/shop.component';

export interface CartState {
  cartItems: CollectionItemData[];
  hidden: boolean;
}

export const TOGGLE_CART_VISIBILITY = 'TOGGLE_CART_VISIBILITY';
export const ADD_CART_ITEM = 'ADD_CART_ITEM';

interface ToggleCartVisibilityAction {
  type: typeof TOGGLE_CART_VISIBILITY;
}

interface AddCartItemAction {
  type: typeof ADD_CART_ITEM;
  payload: {
    item: CollectionItemData;
  };
}

export type CartActions = ToggleCartVisibilityAction | AddCartItemAction;
