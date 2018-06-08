import { FETCH_TOP_RECIPES, FETCH_TRENDING_RECIPES, CLEAR_SEARCH_RESULTS } from '../actions/recipes';
import { SEARCH_FOR_RECIPES } from './../actions/recipes';

const defaultState = {
  topRecipes: [],
  trendingRecipes: [],
  results: []
}

export const reducer = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case FETCH_TRENDING_RECIPES:
      newState.trendingRecipes = action.payload.trendingRecipes;
      return newState;
    case FETCH_TOP_RECIPES:
      newState.topRecipes = action.payload.topRecipes;
      return newState;
    case SEARCH_FOR_RECIPES:
      newState.results = action.payload.results;
      return newState;
    case CLEAR_SEARCH_RESULTS:
      newState.results = [];
      return newState;
    default: 
      return newState;
  }
}