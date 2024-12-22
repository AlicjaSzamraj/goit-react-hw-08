import React from "react";
import Contact from "./Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {Array.isArray(contacts) && contacts.length > 0 ? (
        contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteContact={() => deleteContact(contact.id)}
          />
        ))
      ) : (
        <li className={styles.noContacts}>No contacts available</li>
      )}
    </ul>
  );
};

export default ContactList;
