import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList";
import ContactForm from "../../components/ContactForm";
import SearchBox from "../../components/SearchBox";
import {
  fetchContacts,
  deleteContact,
  addContact,
} from "../../redux/contactsSlice";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const isLoading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id)).then(() => {
      dispatch(fetchContacts());
    });
  };

  const handleAddContact = (contact) => {
    return dispatch(addContact(contact)).then(() => {
      dispatch(fetchContacts());
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Your Contacts</h1>
      <div className={styles.form}>
        <ContactForm onAddContact={handleAddContact} />
      </div>
      <div className={styles.searchBox}>
        <SearchBox />
      </div>
      <ContactList contacts={filteredContacts} deleteContact={handleDelete} />
    </div>
  );
};

export default ContactsPage;
