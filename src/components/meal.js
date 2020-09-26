import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';
import '../styles/meal.scss';

const Meal = ({ meal }) => {
  const {
    idMeal,
    strMeal,
    strMealThumb,
  } = meal;

  const { url } = useRouteMatch();

  return (
    <Col md={6} lg={4} sm={10}>
      <div className="category-item">
        <Link to={`${url}/${idMeal}`} className="meal-image">
          <img
            data-testid="image"
            src={strMealThumb}
            alt={strMeal}
            style={{ width: '100%' }}
          />
          <div className="image-overlay" />
        </Link>
        <div className="category-info">
          <Link to={`${url}/${idMeal}`}><h4>{strMeal}</h4></Link>
        </div>
      </div>
    </Col>
  );
};

Meal.defaultProps = {
  meal: {
    idMeal: '',
    strMeal: '',
    strMealThumb: '',
  },
};

Meal.propTypes = {
  meal: PropTypes.shape({
    idMeal: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }),
};
export default Meal;
