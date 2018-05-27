import { combineReducers } from "redux";
import { reducer as trendingRecipesReducer } from './recipes';

export default combineReducers({
  recipes: trendingRecipesReducer
});