import { createSelector } from "reselect";

const selectHome = state => state.home;

export const selectHomeData = createSelector(
  [selectHome],
  data => data.homeData
)