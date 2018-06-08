import { combineReducers } from "redux";
import { reducer as recipesReducer } from './recipes';
import { reducer as accountReducer } from './account';

export default combineReducers({
  recipes: recipesReducer,
  account: accountReducer
});