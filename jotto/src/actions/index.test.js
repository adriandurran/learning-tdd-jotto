import { correctGuess, actionTypes } from './';

describe('correctGuess', () => {
  test('returns an action with type "correct_guess', () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
