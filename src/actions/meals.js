import { fetchLoading, fetchingMeals, fetchingError } from './actionCreators';

const fetchMeals = categoryType => dispatch => {
  dispatch(fetchLoading());
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryType}`)
    .then(res => res.json())
    .then(result => {
      dispatch(fetchingMeals(result.meals));
    })
    .catch(err => {
      dispatch(fetchingError(err));
    });
};

export default fetchMeals;
