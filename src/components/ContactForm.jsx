import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";
import styles from "./ContactForm.module.css";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  number: yup.string().required("Number is required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    console.log("Submitting values:", values);
    const resultAction = await dispatch(addContact(values));
    if (addContact.fulfilled.match(resultAction)) {
      console.log("Contact added successfully:", resultAction.payload);
    } else {
      console.log("Contact addition failed:", resultAction.payload);
      setErrors({ api: resultAction.payload });
    }
    setSubmitting(false);
  };

  return (
    <div>
      <h2 className={styles.header}>Add Contact</h2>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form className={styles.contactForm}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <Field name="name" type="text" className={styles.input} />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.errorMessage}
            />

            <label htmlFor="number" className={styles.label}>
              Number
            </label>
            <Field name="number" type="text" className={styles.input} />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.errorMessage}
            />

            {errors.api && (
              <div className={styles.errorMessage}>{errors.api}</div>
            )}

            <button type="submit" className={styles.button}>
              Add Contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
