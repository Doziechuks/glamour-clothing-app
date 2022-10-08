import { cartType } from "./cartType";
import { addItemToCart, removeItemFromCart } from "./cartUtilsItem";

const initialState = {
  cartHidden: true,
  cartItems: []
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartType.toggleHiddenCart:
      return {
        ...state,
        cartHidden: !state.cartHidden
      }
    case cartType.addItemToCart:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case cartType.clearItemFromCart:
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id)
      }
    case cartType.removeItemFromCart:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }

    default:
      return state
  }
}

export default cartReducer;