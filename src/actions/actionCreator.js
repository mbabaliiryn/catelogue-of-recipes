import {
  FETCHING_CATEGORIES,
  SET_INGREDIENTS,
  FETCHING_DISH,
  FETCHING_MEALS,
  FETCH_LOADING,
  FETCHING_ERROR,
} from './types';

const fetchingCategories = categories => ({
  type: FETCHING_CATEGORIES,
  categories,
});

const fetchingDish = dish => ({
  type: FETCHING_DISH,
  dish,
});

const fetchingMeals = meals => ({
  type: FETCHING_MEALS,
  meals,
});

const setIngredients = ingredient => ({
  type: SET_INGREDIENTS,
  ingredient,
});

const filterMealsByIngredients = meals => ({
  type: FETCHING_MEALS,
  meals,
});

const fetchLoading = () => ({
  type: FETCH_LOADING,
});

const fetchingError = error => ({
  type: FETCHING_ERROR,
  error,
});

export {
  fetchLoading,
  fetchingCategories,
  fetchingDish,
  fetchingMeals,
  fetchingError,
  setIngredients,
  filterMealsByIngredients,
};
