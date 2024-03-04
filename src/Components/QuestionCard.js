import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Timer from './Timer';
import './questionCard.css';

class QuestionCard extends Component {
  render() {
    const { questions, questionIndex, nextQuestion, isVisible } = this.props;

    return (
      <div className="master-container">
        { questions.length !== 0
          && (
            <>
              <div className="questioncard-container">
                <div className="category-content">
                  <h2
                    className="category-text"
                    data-testid="question-category"
                  >
                    { questions[questionIndex].category }
                  </h2>
                </div>
                <div className="question-container">
                  <p
                    className="question-text"
                    data-testid="question-text"
                  >
                    { questions[questionIndex].question }
                  </p>
                </div>
              </div>
              {isVisible && (
                <button
                  data-testid="btn-next"
                  type="button"
                  onClick={ nextQuestion }
                >
                  Next
                </button>
              )}

            </>
          )}
        <div className="timer">
          <Timer />
        </div>

      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  questions: state.dataReducer.questions,
  isVisible: state.dataReducer.isVisible,
});

QuestionCard.propTypes = {
  questions: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(QuestionCard);
