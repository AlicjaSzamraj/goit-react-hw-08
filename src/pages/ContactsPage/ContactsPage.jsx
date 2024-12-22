import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList";
import ContactForm from "../../components/ContactForm";
import SearchBox from "../../components/SearchBox";
import { fetchContacts, deleteContact } from "../../redux/contactsSlice";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const isLoading = useSelector((state) => state.contacts.isLoading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
        <ContactForm />
      </div>
      <div className={styles.searchBox}>
        <SearchBox />
      </div>
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
};

export default ContactsPage;
