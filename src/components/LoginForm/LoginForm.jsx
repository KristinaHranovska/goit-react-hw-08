import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useId } from "react";
import { logIn } from "../../redux/auth/operation";
import { initialValuesSignIn } from "../../redux/auth/constants";
import { ErrorMessage, Field, Form, Formik } from "formik";
import style from "./LoginForm.module.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";

const validation = Yup.object().shape({
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

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <div className={style.bgLogin}>
      <div className={style.bgPosition}>
        <h2 className={style.titleLogin}>Welcome</h2>
        <Formik
          initialValues={initialValuesSignIn}
          onSubmit={handleSubmit}
          validationSchema={validation}
        >
          {({ errors, touched }) => (
            <Form className={style.containerForm}>
              <div className={style.thumb}>
                <Field
                  className={`${style.formInput} ${
                    errors.email && touched.email && style.error
                  }`}
                  type="email"
                  name="email"
                  id={emailId}
                  placeholder=" "
                />
                <label className={style.formLabel} htmlFor={emailId}>
                  Email
                </label>
                <MdOutlineMailOutline className={style.iconInput} size="20" />
              </div>
              <ErrorMessage
                className={style.errorSpan}
                name="email"
                component="span"
              />
              <div className={style.thumb}>
                <Field
                  className={`${style.formInput} ${
                    errors.password && touched.password && style.error
                  }`}
                  type="password"
                  name="password"
                  id={passwordId}
                  placeholder=" "
                />
                <label className={style.formLabel} htmlFor={passwordId}>
                  Password
                </label>
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
      </div>
    </div>
  );
};

export default LoginForm;
