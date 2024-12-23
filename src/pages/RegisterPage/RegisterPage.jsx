import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import styles from "./RegisterPage.module.css";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleRegister = async (values, { setSubmitting, setErrors }) => {
    console.log("Submitting values:", values); // Logowanie wartości do konsoli
    const resultAction = await dispatch(register(values));
    if (register.fulfilled.match(resultAction)) {
      console.log("Registration successful:", resultAction.payload);
    } else {
      console.log("Registration failed:", resultAction.payload);
      setErrors({ api: resultAction.payload });
    }
    setSubmitting(false);
  };

  return (
    <div>
      <h1 className={styles.header}>Register</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        {({ errors }) => (
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

            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <Field name="email" type="email" className={styles.input} />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.errorMessage}
            />

            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <Field name="password" type="password" className={styles.input} />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.errorMessage}
            />

            {errors.api && (
              <div className={styles.errorMessage}>{errors.api}</div>
            )}

            <button type="submit" className={styles.button}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterPage;
