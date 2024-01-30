import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAddContact } from 'slice/contacts/selector';
import { fetchDeleteContactThunk } from 'slice/contacts/thunk';

import csscontlist from './ContactList.module.css';


export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAddContact);

  const onDelete = id => {
    dispatch(fetchDeleteContactThunk(id));
  };

  return (
    <ul className={csscontlist.item}>
      {contacts &&
        contacts.map(contact => (
          <li className={csscontlist.list} key={contact.id}>
            <div className={csscontlist.list_div}>
              {contact.name} : {contact.number}
            </div>
            <button className={csscontlist.delete_btn} onClick={() => onDelete(contact.id)}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};