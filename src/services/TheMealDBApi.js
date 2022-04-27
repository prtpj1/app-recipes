const CATEGORIAS_BASE_API = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const NACIONALIDADES_BASE_API = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const INGREDIENTES_BASE_API = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';

export const getCategory = async () => {
  const response = await fetch(CATEGORIAS_BASE_API);
  const json = await response.json();
  console.log(json);
  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export const searchFood = async (url, typeSearch, search) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/${url}.php?${typeSearch}=${search}`);
  const json = await response.json();
  console.log(json);
  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export const getNationality = async () => {
  const response = await fetch(NACIONALIDADES_BASE_API);
  const json = await response.json();
  console.log(json);
  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export const getIngredients = async () => {
  const response = await fetch(INGREDIENTES_BASE_API);
  const json = await response.json();
  console.log(json);
  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export const getMeal = async (id) => {
  const response = await fetch(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const json = await response.json();
  console.log(json);
  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

// const FOTOS_INGREDIENTES_BASE_API = `https://www.themealdb.com/images/ingredients/${teste1.meals.strIngredient1}-Small.png`;

// export const getPhotographIngredients = async () => {
//   const response = await fetch(FOTOS_INGREDIENTES_BASE_API);
//   const json = await response.json();
//   return response.ok ? Promise.resolve(json) : Promise.reject(json);
// };
