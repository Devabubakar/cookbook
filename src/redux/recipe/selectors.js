import { createSelector } from 'reselect';

export const storeSelector = (state) => state.store;

export const recipesSelector = createSelector(
  [storeSelector],
  (store) => store.recipes //store is called recipe and collections also called recipes
);

export const IsFetching = createSelector(
  [recipesSelector],
  (recipes) => recipes.isFetching //return boolean value to check if its loading
);

export const isLoaded = createSelector(
  [storeSelector],
  (recipes) => !!recipes.recipes //used !! to return boolean value as the response
);
export const collectionObject = createSelector([recipesSelector], (meals) =>
  meals ? Object.keys(meals).map((key) => meals[key]) : []
);

//selects individual recipe
export const selectIndividualRecipe = (customUrlParam) =>
  createSelector([recipesSelector], (recipes) =>
    recipes.meals.find((meal) => meal.idMeal === customUrlParam)
  );
