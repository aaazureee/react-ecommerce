import { createSelector } from 'reselect';
import { RootState } from '..';

const cartItemsSelector = (state: RootState) => state.cart.cartItems;

export const cartItemsCountSelector = createSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems.reduce(
      (totalCount, currentItem) =>
        totalCount + (currentItem.quantity as number),
      0
    )
);
