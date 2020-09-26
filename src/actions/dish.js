import { fetchLoading, fetchingDish, fetchingError } from './actionCreators';

const fetchDish = mealId => dispatch => {
  dispatch(fetchLoading());
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then(res => res.json())
    .then(result => {
      dispatch(fetchingDish(result.meals[0]));
    })
    .catch(err => {
      dispatch(fetchingError(err));
    });
};

export default fetchDish;
