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

export const cartItemsTotalPriceSelector = createSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems
      .reduce(
        (totalPrice, currentItem) =>
          totalPrice + currentItem.price * (currentItem.quantity as number),
        0
      )
      .toFixed(2)
);
