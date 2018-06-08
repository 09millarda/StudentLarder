import config from '../../config/config';
import * as $ from 'jquery';
import Recipe from './../models/recipe';
import autoMapper from '../helpers/autoMapper';
import classToModel from '../helpers/classToModel';
import RecipeAggregate from './../models/recipeAggregate';

export const FETCH_TRENDING_RECIPES = 'FETCH_TRENDING_RECIPES';
export const FETCH_TOP_RECIPES = 'FETCH_TOP_RECIPES';
export const SEARCH_FOR_RECIPES = 'SEARCH_FOR_RECIPES';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';

/**
 * @param {object} recipes - The returned data from the api after calling fetchTrendingRecipes
 */
const getTrendingRecipes = recipes => {
  recipes = recipes.recipes;

  if (recipes.length === 0) {
    return {
      type: FETCH_TRENDING_RECIPES,
      payload: {
        trendingRecipes: []
      }
    };
  }

  const recipeAggregate = new RecipeAggregate();
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const processedRecipe = autoMapper(recipe, Recipe, false);
    recipeAggregate.recipes.push(classToModel(processedRecipe));
  }

  return {
    type: FETCH_TRENDING_RECIPES,
    payload: {
      trendingRecipes: recipeAggregate.recipes
    }
  };
}

/**
 * @param {object} recipes - The returned data from the api after calling getTopRecipes
 */
const getTopRecipes = ({recipes}) => {
  if (recipes.length === 0) {
    return {
      type: FETCH_TOP_RECIPES,
      payload: {
        topRecipes: []
      }
    };
  }

  const recipeAggregate = new RecipeAggregate();
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const processedRecipe = autoMapper(recipe, Recipe, false);
    recipeAggregate.recipes.push(classToModel(processedRecipe));
  }

  return {
    type: FETCH_TOP_RECIPES,
    payload: {
      topRecipes: recipeAggregate.recipes
    }
  };
}

const getSearchedRecipes = ({recipes}) => {
  if (recipes.length === 0) {
    return {
      type: SEARCH_FOR_RECIPES,
      payload: {
        results: []
      }
    }
  }

  const recipeAggregate = new RecipeAggregate();
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const processedRecipe = autoMapper(recipe, Recipe, false);
    recipeAggregate.recipes.push(classToModel(processedRecipe));
  }

  return {
    type: SEARCH_FOR_RECIPES,
    payload: {
      results: recipeAggregate.recipes
    }
  };
}

export const fetchTrendingRecipes = () => {
  return dispatch => {
    $.getJSON(`${config.URL}/api/search/trending`, data => {  
      dispatch(getTrendingRecipes(data));
    });
  }
}

export const fetchTopRecipes = () => {
  return dispatch => {
    $.getJSON(`${config.URL}/api/search/top`, data => {
      dispatch(getTopRecipes(data));
    });
  };
}

export const searchForRecipes = (ingredients) => {
  const processedIngredients = ingredients.join(',');
  return dispatch => {
    $.getJSON(`${config.URL}/api/search/q/${processedIngredients}`, data => {
      dispatch(getSearchedRecipes(data));
    });
  };
}

export const clearSearchResults = () => {
  return {
    type: CLEAR_SEARCH_RESULTS
  }
}