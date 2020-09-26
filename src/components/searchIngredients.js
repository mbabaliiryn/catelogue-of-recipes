import React, { useState } from 'react';
import '../styles/searchBar.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { setIngredients } from '../actions/actionCreators';
import filterByIngredients from '../actions/filterByIngredients';

const SearchIngredients = props => {
  const { filterByIngredients, setIngredients } = props;
  const [ingredient, setStateIngredient] = useState('');
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    setIngredients(ingredient);
    filterByIngredients(ingredient);
    history.push(`/search/${ingredient}`);
    setStateIngredient('');
  };

  const handleChange = e => {
    e.preventDefault();
    setStateIngredient(e.target.value);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Recipe ..."
        onChange={handleChange}
        value={ingredient}
      />
      <button type="submit" className="btn-search">Search</button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  filterByIngredients: ingredient => {
    dispatch(filterByIngredients(ingredient));
  },
  setIngredients: ingredient => {
    dispatch(setIngredients(ingredient));
  },
});

SearchIngredients.defaultProps = {
  filterByIngredients: () => undefined,
  setIngredients: () => undefined,
};

SearchIngredients.propTypes = {
  filterByIngredients: PropTypes.func,
  setIngredients: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(SearchIngredients);
