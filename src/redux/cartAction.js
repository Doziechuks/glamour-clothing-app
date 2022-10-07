import { cartType } from "./cartType";

export const cartHiddenAction = () => ({
  type: cartType.toggleHiddenCart
});

export const setCartItem = (item) => ({
  type: cartType.addItemToCart,
  payload: item
});