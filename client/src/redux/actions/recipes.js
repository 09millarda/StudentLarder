export const FETCH_TRENDING_RECIPES = 'FETCH_TRENDING_RECIPES';
export const FETCH_TOP_RECIPES = 'FETCH_TOP_RECIPES';

export const fetchTrendingRecipes = () => {
  return {
    type: FETCH_TRENDING_RECIPES,
    payload: {
      trendingRecipes: ['This is trending recipe number 1', 'This is trending recipe number 2']
    }
  };
}

export const fetchTopRecipes = () => {
  return {
    type: FETCH_TOP_RECIPES,
    payload: {
      topRecipes: ['This is top recipe number 1', 'This is top recipe number 2']
    }
  };
}