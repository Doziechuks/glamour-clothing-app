import { cartType } from "./cartType";

const initialState = {
  cartHidden: true
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartType.toggleHiddenCart:
      return {
        ...state,
        cartHidden: !state.cartHidden
      }

    default:
      return state
  }
}

export default cartReducer;