import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getContacts, getError, getFilter, getIsLoading } from '../../redux/selectors';

import { deleteContact, fetchContacts } from '../../redux/operations';
import { Button, ListItem, NumberSpan, Span } from './ContactList.styled';



export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <b>Error: {error}</b>}
      {contacts.length > 0 && (
        <ul>
          {(filter.length > 0
            ? contacts.filter(item =>
                item.name.toLowerCase().includes(filter.toLowerCase())
              )
            : contacts
          ).map(item => (
            <ListItem key={item.id}>
              <Span>{item.name}: </Span>
              <NumberSpan>{item.number}</NumberSpan>

              <Button onClick={() => dispatch(deleteContact(item.id))}>
                Delete
              </Button>
            </ListItem>
          ))}
        </ul>
      )}
    </>
  );
};