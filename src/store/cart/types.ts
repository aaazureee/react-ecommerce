import { CollectionItemData } from '../../pages/shop/shop.component';

export interface CartState {
  cartItems: CollectionItemData[];
  hidden: boolean;
}

export const TOGGLE_CART_VISIBILITY = 'TOGGLE_CART_VISIBILITY';
export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const DECREMENT_CART_ITEM_QUANTITY = 'DECREMENT_CART_ITEM_QUANTITY';
export const CLEAR_CART_ITEMS = 'CLEAR_CART_ITEMS';

interface ToggleCartVisibilityAction {
  type: typeof TOGGLE_CART_VISIBILITY;
}

interface AddCartItemAction {
  type: typeof ADD_CART_ITEM;
  payload: {
    item: CollectionItemData;
  };
}

interface RemoveCartItemAction {
  type: typeof REMOVE_CART_ITEM;
  payload: {
    id: number;
  };
}

interface DecrementCartItemQuantityAction {
  type: typeof DECREMENT_CART_ITEM_QUANTITY;
  payload: {
    id: number;
  };
}

interface ClearCartItemsAction {
  type: typeof CLEAR_CART_ITEMS;
}

export type CartActions =
  | ToggleCartVisibilityAction
  | AddCartItemAction
  | RemoveCartItemAction
  | DecrementCartItemQuantityAction
  | ClearCartItemsAction;
