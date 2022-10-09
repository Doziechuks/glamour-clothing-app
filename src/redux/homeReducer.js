import data from "../components/homeData";

const initialState = {
  homeData: data
}

const homeReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default homeReducer;