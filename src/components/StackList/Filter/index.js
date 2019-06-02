import React, { Component, Fragment } from 'react';
import './styles.scss';

class Filter extends Component {
  render() {
    return (
      <Fragment>
        <div className="filter__wrapper">
          <i className="fas fa-search"></i>
          <form action="">
            <label htmlFor="searchQuestion"></label>
            <input type="text" id="searchQuestion" placeholder="Buscar..." />
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Filter;