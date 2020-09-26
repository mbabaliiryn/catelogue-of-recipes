import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import getIngredients from '../utils/formatDish';
import '../styles/singleDish.scss';

let youtubeURL = '';

const Dish = ({ dish }) => {
  const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube,
    strTags,
  } = dish;

  if (strYoutube !== undefined) {
    youtubeURL = strYoutube.replace('watch?v=', 'embed/');
  }

  const ingredients = getIngredients(dish);

  return (
    <div className="dish-item">
      <div className="dish-image">
        <div data-testid="image" className="img" style={{ backgroundImage: `url(${strMealThumb})` }} />
        <div className="dish-title">
          <h3>{strMeal}</h3>
        </div>
        <div className="dish-overlay" />
      </div>
      <div className="dish-info">
        <p className="d-meta">
          <span>{strCategory}</span>
          <span>{strArea}</span>
          {
            strTags ? <span>{strTags}</span> : <></>
          }
        </p>
        <Container>

          <Row>

            <Col style={{ margin: '0 auto', paddingBottom: 40 }} md={6} lg={6} sm={8}>
              <div className="dish-instructions">
                <h3 className="dish-heading">Ingredients</h3>
                <div className="ingredient-list">
                  {
                  ingredients.map(item => (
                    <div className="ing-item" key={item}>{item}</div>
                  ))
                }
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col style={{ margin: '0 auto' }} md={10} lg={10} sm={8}>
              <div className="dish-instructions">
                <h3 className="dish-heading">Instructions</h3>
                <p>{strInstructions}</p>
              </div>
            </Col>
          </Row>
          {
            youtubeURL
              ? (
                <Row>
                  <Col style={{ margin: '0 auto' }} md={10} lg={10} sm={8}>
                    <div className="youtube-link">
                      <h3 className="dish-heading">Watch video</h3>
                      <iframe
                        src={youtubeURL}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="video"
                      />
                    </div>
                  </Col>
                </Row>
              )
              : <div />
          }

        </Container>
      </div>
    </div>
  );
};

Dish.defaultProps = {
  dish: [],
};

Dish.propTypes = {
  dish: PropTypes.shape({
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strArea: PropTypes.string,
    strInstructions: PropTypes.string,
    strMealThumb: PropTypes.string,
    strYoutube: PropTypes.string,
    strTags: PropTypes.string,
  }),
};

export default Dish;
