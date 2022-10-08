import { cartType } from "./cartType";

export const cartHiddenAction = () => ({
  type: cartType.toggleHiddenCart
});

export const setCartItem = (item) => ({
  type: cartType.addItemToCart,
  payload: item
});

export const clearItemFromCart = (item) => ({
  type: cartType.clearItemFromCart,
  payload: item
})

export const removeItemFromCart = (item) => ({
  type: cartType.removeItemFromCart,
  payload: item
})