import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useId } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import style from "./RegisterForm.module.css";
import { RiLockPasswordLine, RiUser3Line } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { register } from "../../redux/auth/operation";
import { initialValuesSignUp } from "../../redux/auth/constants";

const validation = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8)
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
      "Password must contain at least one number, one uppercase and one lowercase letter."
      // Пароль повинен містити щонайменше одну цифру, одну велику та одну малу літеру.
    ),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();
  const nickId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValuesSignUp}
        onSubmit={handleSubmit}
        validationSchema={validation}
      >
        {({ errors, touched }) => (
          <Form className={style.containerForm}>
            <label className={style.formLabel} htmlFor={nickId}>
              Username
            </label>

            <div className={style.thumb}>
              <Field
                className={`${style.formInput} ${
                  errors.name && touched.name && style.errorNickname
                }`}
                type="text"
                name="name"
                id={nickId}
                placeholder="Name"
              />
              <RiUser3Line className={style.iconInput} size="20" />
            </div>
            <ErrorMessage
              className={style.errorSpan}
              name="name"
              component="span"
            />

            <label className={style.formLabel} htmlFor={emailId}>
              Email
            </label>

            <div className={style.thumb}>
              <Field
                className={`${style.formInput} ${
                  errors.email && touched.email && style.errorEmail
                }`}
                type="email"
                name="email"
                id={emailId}
                placeholder="Email"
              />
              <MdOutlineMailOutline className={style.iconInput} size="20" />
            </div>
            <ErrorMessage
              className={style.errorSpan}
              name="email"
              component="span"
            />

            <label className={style.formLabel} htmlFor={passwordId}>
              Password
            </label>

            <div className={style.thumb}>
              <Field
                className={`${style.formInput} ${
                  errors.password && touched.password && style.errorPassword
                }`}
                type="text"
                // type="password"
                name="password"
                id={passwordId}
                placeholder="Password"
              />
              <RiLockPasswordLine className={style.iconInput} size="20" />
            </div>
            <ErrorMessage
              className={style.errorSpan}
              name="password"
              component="span"
            />

            <button className={style.buttonLogin} type="submit">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
