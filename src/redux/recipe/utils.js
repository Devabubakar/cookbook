export const getApiData = async () => {
  try {
    const response = await fetch(
      'https://api.edamam.com/api/recipes/v2?type=public&app_id=5a0dcf71&app_key=bbb43e9dfafda4038efeab6bdf03fe54&diet=balanced'
    )
      .then((response) => response.json())
      .then((recipeObject) => recipeObject.hits);

    return response;
  } catch (error) {
    console.log('error', error);
  }
};
