import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Ranking extends Component {
  goHomeBtn = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <div>
        <h2
          data-testid="ranking-title"
        >
          Ranking
        </h2>
        <button
          type="button"
          onClick={ this.goHomeBtn }
          data-testid="btn-go-home"
        >
          Home
        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.object,
}.isRequired;
