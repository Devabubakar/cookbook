import { createSelector } from 'reselect';

export const recipeSelectors = (state) => state.recipes;

export const selectRecipes = createSelector(
  [recipeSelectors],
  (recipes) => recipes.recipes //store is called recipe and collections also called recipes
);

export const IsFetching = createSelector(
  [selectRecipes],
  (recipes) => recipes.isFetching //return boolean value to check if its loading
);

export const isLoaded = createSelector(
  [recipeSelectors],
  (recipes) => !!recipes.recipes //used !! to return boolean value as the response
);
