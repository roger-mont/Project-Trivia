import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import { fetchQuestions, isVisible } from '../redux/actions/index.actions';
import QuestionCard from '../Components/QuestionCard';
import QuestionChoices from '../Components/QuestionChoices';
import './game.css';

class Game extends Component {
  state = {
    loading: true,
    questionIndex: 0,
  };

  async componentDidMount() {
    const { history, dispatch } = this.props;
    const wrongToken = 3;
    const localToken = localStorage.getItem('token');

    const responseCode = await dispatch(fetchQuestions(localToken));

    if (responseCode === wrongToken) {
      localStorage.removeItem('token');
      history.push('/');
    }

    this.setState({
      loading: false,
    });
  }

  nextQuestion = () => {
    const { questionIndex } = this.state;
    const { history, dispatch } = this.props;
    const maxClick = 4;
    if (questionIndex === maxClick) {
      history.push('/feedback');
    } else {
      this.setState((prevState) => ({
        questionIndex: prevState.questionIndex + 1,
      }), () => (dispatch(isVisible(false))));
    }

    const allButtons = document.querySelectorAll('#correct-answer, #wrong-answer');
    allButtons.forEach((e) => { e.style.border = 0; });
  };

  render() {
    const { loading, questionIndex } = this.state;
    const { history } = this.props;
    if (loading) return <h1>Carregando...</h1>;
    return (
      <div className="master-container">
        <div className="header-container-game">
          <Header />
        </div>
        <div className="question-answer-container">
          <div className="question-container-game">
            <QuestionCard
              questionIndex={ questionIndex }
              nextQuestion={ this.nextQuestion }
              history={ history }
            />
          </div>
          <div className="answer-container-game">
            <QuestionChoices
              questionIndex={ questionIndex }
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  responseCode: state.dataReducer.responseCode,
});

Game.propTypes = {
  history: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps)(Game);
