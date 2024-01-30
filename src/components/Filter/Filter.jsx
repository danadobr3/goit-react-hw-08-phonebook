import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from '../../slice/contacts/filterSlice';
import { selectFilter } from 'slice/contacts/selector';

import cssfilter from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      className={cssfilter.search_user}
      type="text"
      value={filter}
      onChange={onChange}
      placeholder="Search contacts"
    />
  );
};