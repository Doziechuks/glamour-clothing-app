import { createSelector } from "reselect";

const selectShopItems = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShopItems],
  item => item.collections
)