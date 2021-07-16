import { createSelector } from 'reselect';

export const storeSelector = (state) => state.store;

export const recipesSelector = createSelector(
  [storeSelector],
  (recipes) => recipes.recipes //store is called recipe and collections also called recipes
);

export const IsFetching = createSelector(
  [recipesSelector],
  (recipes) => recipes.isFetching //return boolean value to check if its loading
);

export const isLoaded = createSelector(
  [storeSelector],
  (recipes) => !!recipes.recipes //used !! to return boolean value as the response
);

//selects individual recipe
export const selectIndividualRecipe = (customUrlParam) =>
  createSelector([recipesSelector], (recipes) =>
    recipes.find((recipes) => recipes.recipe.label === customUrlParam)
  );
