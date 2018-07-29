import checkPropTypes from 'check-prop-types';

import rootReducer from '../src/reducers';
import { createStore } from 'redux';

/**
 * Return ShallowWrapper containing node(s) with the given data-test attribute value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - value of data-test attribute
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};
