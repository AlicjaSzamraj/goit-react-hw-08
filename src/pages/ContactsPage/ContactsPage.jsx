import React from "react";
import ContactList from "../../components/ContactList";
import ContactForm from "../../components/ContactForm";
import SearchBox from "../../components/SearchBox";
import "./ContactsPage.module.css";

const ContactsPage = () => (
  <div>
    <h1>Your Contacts</h1>
    <ContactForm />
    <SearchBox />
    <ContactList />
  </div>
);

export default ContactsPage;
