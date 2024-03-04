import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Components/Header';

class Feedback extends Component {
  playAgainBtn = () => {
    const { history } = this.props;
    history.push('/');
  };

  rankingBtn = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  render() {
    const { score, assertions } = this.props;
    const assertionsTotal = 3;
    return (
      <div>
        <Header />
        <h1>Feedbacks</h1>
        { assertions < assertionsTotal
          ? (<p data-testid="feedback-text">Could be better...</p>)
          : (<p data-testid="feedback-text">Well Done!</p>)}
        <section>
          <p data-testid="feedback-total-score">{ score }</p>
          <p data-testid="feedback-total-question">{ assertions }</p>
        </section>
        <div>
          <button
            type="button"
            onClick={ this.playAgainBtn }
            data-testid="btn-play-again"
          >
            Play Again
          </button>
          <button
            type="button"
            onClick={ this.rankingBtn }
            data-testid="btn-ranking"
          >
            Ranking
          </button>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  score: PropTypes.number,
  assertions: PropTypes.number,
}.isRequired;

Feedback.defaultProps = {
  score: 0,
  assertions: 0,
};

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: state.player.assertions,
});
export default connect(mapStateToProps)(Feedback);
