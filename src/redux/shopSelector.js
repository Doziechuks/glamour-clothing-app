import { createSelector } from "reselect";

const selectShopItems = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShopItems],
  item => item.collections
);

export const selectCollection = (collectionUrlParam) => {
  return createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
  );
};