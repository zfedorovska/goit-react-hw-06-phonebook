import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', data => ({
  payload: {
    id: nanoid(),
    name: data.name,
    number: data.number,
  },
}));
const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/filter');

const actions = {
  addContact,
  deleteContact,
  changeFilter,
};
export default actions;
