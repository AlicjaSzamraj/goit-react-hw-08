import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import styles from "./LoginPage.module.css";

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = async (values, { setSubmitting, setErrors }) => {
    const resultAction = await dispatch(login(values));
    if (login.fulfilled.match(resultAction)) {
      console.log("Login successful:", resultAction.payload);
    } else {
      console.log("Login failed:", resultAction.payload);
      setErrors({ api: resultAction.payload.message });
    }
    setSubmitting(false);
  };

  return (
    <div>
      <h1 className={styles.header}>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ errors }) => (
          <Form className={styles.form}>
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
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
