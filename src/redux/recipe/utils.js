export const getApiData = async () => {
  try {
    const response = await fetch(
      ' https://www.themealdb.com/api/json/v1/1/search.php?s='
    ).then((response) => response.json());

    return response;
  } catch (error) {
    console.log('error', error);
  }
};
