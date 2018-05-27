import { FETCH_TOP_RECIPES, FETCH_TRENDING_RECIPES } from '../actions/recipes';

export const reducer = (state = {}, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case FETCH_TRENDING_RECIPES:
      newState.trendingRecipes = action.payload.trendingRecipes;
      return newState;
    case FETCH_TOP_RECIPES:
      newState.topRecipes = action.payload.topRecipes;
      return newState
    default: 
      return state;
  }
}