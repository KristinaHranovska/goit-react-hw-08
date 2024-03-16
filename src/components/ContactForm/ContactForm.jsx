import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { BsPhone, BsPerson } from "react-icons/bs";

import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { initialValues } from "../../redux/constants";
import { addContact } from "../../redux/contactsOps";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, "Invalid phone number format")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ errors, touched }) => (
        <Form className={css.containerForm}>
          <label className={css.formLabel} htmlFor={nameId}>
            Name
          </label>

          <div className={css.thumb}>
            <Field
              className={`${css.formInput} ${
                errors.name && touched.name && css.errorName
              }`}
              type="text"
              name="name"
              id={nameId}
              placeholder="Name"
            />
            <BsPerson className={css.iconInput} size="20" />
          </div>
          <ErrorMessage
            className={css.errorSpan}
            name="name"
            component="span"
          />

          <label className={css.formLabel} htmlFor={numberId}>
            Phone
          </label>

          <div className={css.thumb}>
            <Field
              className={`${css.formInput} ${
                errors.phone && touched.phone && css.errorNumber
              }`}
              type="text"
              name="phone"
              id={numberId}
              placeholder="xxx-xxx-xxxx"
            />
            <BsPhone className={css.iconInput} size="20" />
          </div>
          <ErrorMessage
            className={css.errorSpan}
            name="phone"
            component="span"
          />

          <button className={css.buttonAdd} type="submit">
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
