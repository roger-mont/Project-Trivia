import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestToken, sendEmail } from '../redux/actions/index.actions';
import './login.css';

class Login extends Component {
  state = {
    email: '',
    name: '',
    disabledBtn: true,
  };

  validateEmail = (email) => {
    const regex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

    return regex.test(email);
  };

  validateForm = () => {
    const { email, name } = this.state;

    const REQ_1 = this.validateEmail(email);
    const REQ_2 = name.length !== 0;

    if (REQ_1 && REQ_2) {
      this.setState({
        disabledBtn: false,
      });
    } else {
      this.setState({
        disabledBtn: true,
      });
    }
  };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => this.validateForm());
  };

  handleClick = async () => {
    const { history, dispatch } = this.props;
    const { email, name } = this.state;
    await requestToken();
    dispatch(sendEmail(email, name));

    history.push('/games');
  };

  handleClickSettings = () => {
    const { history } = this.props;

    history.push('/settings');
  };

  render() {
    const { disabledBtn, email, name } = this.state;
    return (
      <div className="paginatoda">
        <div className="master-container-login">
          <div className="trivia-content">
            <h1 className="trivia-text">TRIVIA</h1>
          </div>
          <form className="login-containt">
            <input
              className="email-input"
              type="text"
              value={ email }
              name="email"
              onChange={ this.onInputChange }
              autoComplete="off"
              placeholder="Insira seu email"
              data-testid="input-gravatar-email"
            />
            <input
              className="name-input"
              type="text"
              value={ name }
              name="name"
              onChange={ this.onInputChange }
              autoComplete="off"
              placeholder="Insira seu nome"
              data-testid="input-player-name"
            />
            <div className="buttons-container">
              <button
                className="play-button"
                type="button"
                disabled={ disabledBtn }
                onClick={ this.handleClick }
                data-testid="btn-play"
              >
                Play
              </button>
              <button
                className="settings-button"
                type="button"
                onClick={ this.handleClickSettings }
                data-testid="btn-settings"
              >
                Settings
              </button>
            </div>
          </form>
          <div />
          <div className="rodape">
            <p>
              Trabalho desenvolvido por Roger
              Monteiro, Letícia Chaves, Lílian Vieira, Livia Lima e Gabriel Yamazato
            </p>
          </div>
        </div>

      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object,
}.isRequired;

// REQUISITO 1 e 6 REALIZADO EM GRUPO POR: GABRIEL YAMAZATO, LETICIA CHAVES, LIVIA BOECHAT E ROGER MONTEIRO.
export default connect(null)(Login);
