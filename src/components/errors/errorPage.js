import React from 'react';
import PropTypes from 'prop-types';
import errorImage from '../../error.png';
import '../../styles/errorPage.scss';

const ErrorPage = ({ error }) => (
  <div className="error-page">

    <div className="error-info">
      <img src={errorImage} alt="Error" />
      <h4>{error}</h4>
    </div>

  </div>
);

ErrorPage.defaultProps = {
  error: '',
};

ErrorPage.propTypes = {
  error: PropTypes.string,
};

export default ErrorPage;
