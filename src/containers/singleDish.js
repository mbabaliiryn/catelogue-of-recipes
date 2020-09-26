import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingPage from '../components/loadingPage';
import fetchDish from '../actions/dish';
import ErrorPage from '../components/errors/errorPage';
import '../styles/singleDish.scss';
import Dish from '../components/dish';

const SingleDish = props => {
  const { mealID } = useParams();

  const {
    dish,
    loading,
    error,
    fetchDish,
  } = props;

  useEffect(() => {
    if (mealID) {
      fetchDish(mealID);
    }
  }, [fetchDish, mealID]);

  return (
    <section className="dish-section">
      {(() => {
        if (loading) {
          return <LoadingPage />;
        }
        return (
          error ? <ErrorPage error={error.message} />
            : <Dish dish={dish} />
        );
      })() }
    </section>
  );
};

const mapStateToProps = state => ({
  dish: state.dish.dish,
  loading: state.dish.loading,
  error: state.dish.error,
});

const mapDispatchTOProps = dispatch => ({
  fetchDish: mealId => {
    dispatch(fetchDish(mealId));
  },
});

SingleDish.defaultProps = {
  dish: {},
  error: '',
  loading: false,
  fetchDish: () => undefined,
};

SingleDish.propTypes = {
  fetchDish: PropTypes.func,
  dish: PropTypes.shape({
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strArea: PropTypes.string,
    strInstructions: PropTypes.string,
    strMealThumb: PropTypes.string,
    strYoutube: PropTypes.string,
    strTags: PropTypes.string,
  }),
  error: PropTypes.string,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchTOProps)(SingleDish);
