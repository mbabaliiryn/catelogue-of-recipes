import { fetchLoading, fetchingCategories, fetchingError } from './actionCreators';

const fetchCategories = () => dispatch => {
  dispatch(fetchLoading());
  fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(result => {
      dispatch(fetchingCategories(result.categories));
    })
    .catch(err => {
      dispatch(fetchingError(err));
    });
};

export default fetchCategories;
