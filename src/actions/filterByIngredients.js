import { fetchLoading, filterMealsByIngredients, fetchingError } from './actionCreators';

const filterByIngredients = ingredient => dispatch => {
  dispatch(fetchLoading());
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then(res => res.json())
    .then(result => {
      dispatch(filterMealsByIngredients(result.meals));
    })
    .catch(err => {
      dispatch(fetchingError(err));
    });
};

export default filterByIngredients;
