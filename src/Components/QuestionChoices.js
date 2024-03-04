import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveCorrectAnwer, isVisible } from '../redux/actions/index.actions';
import './questionChoices.css';

class QuestionChoices extends Component {
  state = {
    answers: [],
  };

  componentDidMount() {
    this.sortAnswer();
  }

  handleClick = ({ target }) => {
    const { dispatch } = this.props;
    const allButtons = document.querySelectorAll('#correct-answer, #wrong-answer');
    console.log(allButtons);

    const correctAnswer = 'correct-answer';

    allButtons.forEach((eachButton) => {
      if (eachButton.id === correctAnswer) {
        eachButton.style.border = '3px solid rgb(6, 240, 15)';
        dispatch(isVisible(true));
      } else {
        eachButton.style.border = '3px solid rgb(255, 0, 0)';
        dispatch(isVisible(true));
      }
    });

    const eachCorrect = 10;
    const easy = 1;
    const medium = 2;
    const hard = 3;

    if (target.id === correctAnswer) {
      const { time, questions, questionIndex } = this.props;
      if (questions[questionIndex].difficulty === 'easy') {
        const score = (eachCorrect + (time * easy));
        dispatch(saveCorrectAnwer({ score, assertions: 1 }));
      }
      if (questions[questionIndex].difficulty === 'medium') {
        const score = (eachCorrect + (time * medium));
        dispatch(saveCorrectAnwer({ score, assertions: 1 }));
      }
      if (questions[questionIndex].difficulty === 'hard') {
        const score = (eachCorrect + (time * hard));
        dispatch(saveCorrectAnwer({ score, assertions: 1 }));
      }
    }
  };

  sortAnswer = () => {
    const { questions } = this.props;
    const number = 0.5;

    const answers = questions.map((e) => e.incorrect_answers
      .concat(e.correct_answer).sort(() => Math.random() - number));

    console.log(answers);
    this.setState({
      answers,
    });
  };

  render() {
    const { questions, questionIndex, isDisabled } = this.props;
    const { answers } = this.state;
    const correctAnswer = 'correct-answer';
    console.log(questionIndex);
    return (
      <div
        className="master-container"
        data-testid="answer-options"
      >

        {answers[questionIndex]?.map((answer, index) => (
          <button
            className="choice-buttons"
            key={ index }
            id={ answer === questions[questionIndex].correct_answer
              ? correctAnswer : 'wrong-answer' }
            data-testid={ answer === questions[questionIndex].correct_answer
              ? correctAnswer : `wrong-answer-${index}` }
            name={ answer === questions[questionIndex].correct_answer
              ? 'correct' : 'wrong' }
            type="button"
            onClick={ this.handleClick }
            disabled={ isDisabled }
          >
            {answer}
          </button>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.dataReducer.questions,
  isDisabled: state.timerReducer.isDisabled,
  score: state.player.score,
  time: state.timerReducer.time,
});

QuestionChoices.propTypes = {
  questions: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(QuestionChoices);
