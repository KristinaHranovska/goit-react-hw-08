import { useDispatch } from "react-redux";
import * as Yup from "yup";
import TitleDocument from "../../components/TitleDocument";
import { useId } from "react";
import { logIn } from "../../redux/auth/operation";
import { initialValues } from "../../redux/auth/constants";
import { ErrorMessage, Field, Form, Formik } from "formik";
import style from "./Login.module.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";

const validation = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .required()
    .min(8)
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
      "Password must contain at least one number, one uppercase and one lowercase letter."
    ),
});

// Пароль повинен містити щонайменше одну цифру, одну велику та одну малу літеру.

const Login = () => {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <>
      <TitleDocument>Login</TitleDocument>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validation}
      >
        {({ errors, touched }) => (
          <Form className={style.containerForm}>
            <label className={style.formLabel} htmlFor={emailId}>
              Email
            </label>

            <div className={style.thumb}>
              <Field
                className={`${style.formInput} ${
                  errors.email && touched.email && style.errorEmail
                }`}
                type="text"
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
              Phone
            </label>

            <div className={style.thumb}>
              <Field
                className={`${style.formInput} ${
                  errors.password && touched.password && style.errorPassword
                }`}
                type="text"
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

export default Login;
