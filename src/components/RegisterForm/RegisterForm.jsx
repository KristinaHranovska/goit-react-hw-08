import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useId } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import style from "../LoginForm/LoginForm.module.css";
import { RiLockPasswordLine, RiUser3Line } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { register } from "../../redux/auth/operation";
import { initialValuesSignUp } from "../../redux/auth/constants";
import loginBoy from "../../assets/img/sign-up/signup.png";
import loginLamp from "../../assets/img/sign-in/lampshade.png";

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
    <section className={style.bgLogin}>
      <div className={`${style.bgPosition} ${style.LogInForm}`}>
        <div className={style.thumbForm}>
          <h2 className={style.titleLogin}>Sign-Up</h2>
          <Formik
            initialValues={initialValuesSignUp}
            onSubmit={handleSubmit}
            validationSchema={validation}
          >
            {({ errors, touched }) => (
              <Form className={style.containerForm}>
                <div className={style.thumb}>
                  <Field
                    className={`${style.formInput} ${
                      errors.name && touched.name && style.errorNickname
                    }`}
                    type="text"
                    name="name"
                    id={nickId}
                    placeholder=" "
                  />
                  <label className={style.formLabel} htmlFor={nickId}>
                    Username
                  </label>
                  <RiUser3Line className={style.iconInput} size="20" />
                </div>
                <ErrorMessage
                  className={style.errorSpan}
                  name="name"
                  component="span"
                />

                <div className={style.thumb}>
                  <Field
                    className={`${style.formInput} ${
                      errors.email && touched.email && style.errorEmail
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
                      errors.password && touched.password && style.errorPassword
                    }`}
                    type="text"
                    // type="password"
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
        <div className={style.bgImgForm}></div>
        <img className={style.loginBoy} src={loginBoy} alt="loginBoy" />
        <img className={style.loginLamp} src={loginLamp} alt="loginLamp" />
      </div>
    </section>
  );
};

export default RegisterForm;
