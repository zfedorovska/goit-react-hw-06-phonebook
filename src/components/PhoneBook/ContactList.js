import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import React from 'react';
import s from './PhoneBook.module.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p className={s.contactItem}>
            {name}: {number}{' '}
            <button
              className={s.removeButton}
              onClick={() => dispatch(actions.deleteContact(id))}
            >
              Remove
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
}
