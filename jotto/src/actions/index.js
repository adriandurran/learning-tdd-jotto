export const actionTypes = {
  CORRECT_GUESS: 'correct_guess',
  GUESS_WORD: 'guess_word'
};

import { getLetterMatchCount } from '../helpers';

// export const correctGuess = () => {
//   return { type: actionTypes.CORRECT_GUESS };
// };

export const guessWord = (guessedWord) => {
  return function(dispatch, getState) {
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
