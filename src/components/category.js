import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/category.scss';

const Category = ({ category }) => {
  const {
    strCategory,
    strCategoryDescription,
    strCategoryThumb,
  } = category;

  return (
    <Col md={6} lg={4} sm={10}>
      <div className="category-item">
        <Link to={`/${strCategory}`} className="img-div">
          <img
            data-testid="image"
            src={strCategoryThumb}
            alt={strCategory}
          />
          <div className="img-overlay" />
        </Link>

        <div className="category-info">
          <Link className="category-title" to={`/${strCategory}`}><h4>{strCategory}</h4></Link>
          <p>{strCategoryDescription}</p>
        </div>
      </div>
    </Col>
  );
};

Category.defaultProps = {
  category: {
    strCategory: '',
    strCategoryDescription: '',
    strCategoryThumb: '',
  },
};

Category.propTypes = {
  category: PropTypes.shape({
    strCategory: PropTypes.string,
    strCategoryDescription: PropTypes.string,
    strCategoryThumb: PropTypes.string,
  }),
};

export default Category;
