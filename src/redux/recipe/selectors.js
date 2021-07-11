import {createSelector} from 'reselect';

export const recipeSelectors = (state) => state.recipes;

export const selectRecipes = createSelector(
  [recipeSelectors],
  (recipes) => recipes.recipes //store is called recipe and collections also called recipe
);
