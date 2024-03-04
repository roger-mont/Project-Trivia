import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './header.css';

class Header extends Component {
  gravatarIcon = () => {
    const { gravatarEmail } = this.props;
    const hash = md5(gravatarEmail).toString();
    const imgSrc = `https://www.gravatar.com/avatar/${hash}`;

    return imgSrc;
  };

  render() {
    const { name, score } = this.props;
    return (
      <header className="header-container">
        <img
          className="img"
          src={ this.gravatarIcon() }
          alt="Avatar do Gravatar"
          data-testid="header-profile-picture"
        />

        <h3
          className="name"
          data-testid="header-player-name"
        >
          {name}
        </h3>

        <h3
          className="score"
          data-testid="header-score"
        >
          {score}
        </h3>

      </header>
    );
  }
}

const mapStateToProps = (state) => (
  {
    name: state.player.name,
    gravatarEmail: state.player.gravatarEmail,
    score: state.player.score,
    time: state.timerReducer.time,
  }
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
