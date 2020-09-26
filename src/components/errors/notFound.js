import React from 'react';
import '../../styles/notfound.scss';
import notfoundImage from '../../404.png';

const NotFound = () => (
  <div className="notfound-section">
    <div className="notfound-page">
      <img src={notfoundImage} alt="Not found" />
      <h2>Page not found</h2>
    </div>
  </div>
);

export default NotFound;
