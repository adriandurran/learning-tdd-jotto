import axios from 'axios';

export const actionTypes = {
  CORRECT_GUESS: 'correct_guess',
  GUESS_WORD: 'guess_word',
  SET_SECRET_WORD: 'set_secret_word'
};

// https://github.com/flyrightsister/udemy-react-testing-projects

import { getLetterMatchCount } from '../helpers';

export const guessWord = (guessedWord) => {
  return (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount }
    });

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  };
};

export const getSecretWord = () => async (dispatch) => {
  const res = await axios.get('http://localhost:3030');
  dispatch({ type: actionTypes.SET_SECRET_WORD, payload: res.data });
};
