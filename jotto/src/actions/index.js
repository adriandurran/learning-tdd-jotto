import axios from 'axios';
import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'correct_guess',
  GUESS_WORD: 'guess_word',
  SET_SECRET_WORD: 'set_secret_word'
};

// https://github.com/flyrightsister/udemy-react-testing-projects

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
  const resWord = 'party';
  dispatch({ type: actionTypes.SET_SECRET_WORD, payload: resWord });
};
