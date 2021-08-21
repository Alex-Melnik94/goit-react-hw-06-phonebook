import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './contact-list.module.css';
import actions from '../redux/phonebook/phonebook-actions';

const ContactList = () => {
  const contacts = useSelector(state => state.phonebook.items);
  const filter = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const onDelete = id => dispatch(actions.deleteContact(id));

  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => {
        return (
          <li className={styles.item} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={styles.button}
              type="button"
              onClick={() => {
                onDelete(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
