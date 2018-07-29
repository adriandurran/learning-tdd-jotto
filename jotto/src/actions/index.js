export const actionTypes = {
  CORRECT_GUESS: 'correct_guess'
};

export const correctGuess = () => {
  return { type: actionTypes.CORRECT_GUESS };
};
