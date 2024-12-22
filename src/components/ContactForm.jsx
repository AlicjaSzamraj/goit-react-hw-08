import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import styles from "./ContactForm.module.css";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  number: yup.string().required("Number is required"),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    console.log("Submitting values:", values);
    try {
      const resultAction = await onAddContact(values);
      if (resultAction.type.endsWith("/fulfilled")) {
        console.log("Contact added successfully:", resultAction.payload);
      } else {
        console.log("Contact addition failed:", resultAction.payload);
        setErrors({ api: resultAction.payload });
      }
    } catch (error) {
      console.error("Error adding contact:", error);
      setErrors({ api: error.message });
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
        {({ errors, isSubmitting }) => (
          <Form className={styles.form}>
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

            <button
              type="submit"
              className={styles.button}
              disabled={isSubmitting}
            >
              Add Contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
