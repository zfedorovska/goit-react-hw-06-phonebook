import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const isContactNameFound = (contacts, name) => {
  if (contacts.length === 0) return false;
  return contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
};

const itemsReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    if (isContactNameFound(state, payload.name)) {
      alert(`${payload.name} is already in contacts`);
      return state;
    } else {
      return [...state, payload];
    }
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
