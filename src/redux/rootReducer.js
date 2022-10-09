import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import homeReducer from "./homeReducer";
import shopReducer from "./shopReducer";


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  home: homeReducer,
  shop: shopReducer
});
export default persistReducer(persistConfig, rootReducer);