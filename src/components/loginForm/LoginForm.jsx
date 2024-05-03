import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import css from '../registrationForm/RegistrationForm.module.css';
import { apiLogin } from '../../redux/auth/operations';
import { selectError } from '../../redux/auth/selectors';
import { MIN_CHAR_PASSWORD_VALIDATION } from '../../utils/constants';
import toast from 'react-hot-toast';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('You must enter a valid email address')
    .required('Required'),
  password: Yup.string()
    .min(
      MIN_CHAR_PASSWORD_VALIDATION,
      `Password must be greater than ${MIN_CHAR_PASSWORD_VALIDATION} characters`
    )
    .required('Password is required'),
});

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(apiLogin(values));
    {
      error && toast.error('Not correct email or password. Try again!');
    }
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <h2> User log in</h2>
        <div className={css.wrapper}>
          <label className={css.label}>
            Email
            <Field
              className={css.field}
              type="email"
              name="email"
              placeholder="username@mail.com"
            />
            <ErrorMessage name="email" component="span" className={css.error} />
          </label>
          <label className={css.label}>
            Password
            <Field
              className={css.field}
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="span"
              className={css.error}
            />
          </label>
        </div>

        <button className={css.submitBtn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
