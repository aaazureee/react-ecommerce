import { CollectionItemData } from '../../pages/shop/shop.component';

export const addCartItemHelper = (
  cartItems: CollectionItemData[],
  addedCartItem: CollectionItemData
): CollectionItemData[] => {
  const existingCartItem = cartItems.find((x) => x.id === addedCartItem.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === addedCartItem.id
        ? {
            ...cartItem,
            quantity: (cartItem.quantity as number) + 1,
          }
        : cartItem
    );
  }

  return [...cartItems, { ...addedCartItem, quantity: 1 }];
};
