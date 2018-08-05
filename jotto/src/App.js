import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSecretWord } from './actions';

import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';

class App extends Component {
  componentDidMount() {
    // this.props.getSecretWord();
  }

  render() {
    const { success, guessedWords } = this.props;

    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={success} />
        <Input />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    success: state.success,
    guessedWords: state.guessedWords,
    secretWord: state.secretWord
  };
};

App = connect(
  mapStateToProps,
  { getSecretWord }
)(App);

export default App;
