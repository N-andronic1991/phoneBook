import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { apiRegister } from '../../redux/auth/operations';
import { selectError } from '../../redux/auth/selectors';
import {
  MAX_CHAR_NAME_VALIDATION,
  MIN_CHAR_NAME_VALIDATION,
  MIN_CHAR_PASSWORD_VALIDATION,
} from '../../utils/constants';
import toast from 'react-hot-toast';
import css from './RegistrationForm.module.css';

const RegisterUserSchema = Yup.object().shape({
  name: Yup.string()
    .min(MIN_CHAR_NAME_VALIDATION, 'Too Short!')
    .max(MAX_CHAR_NAME_VALIDATION, 'Too Long!')
    .required('Required'),
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

const RegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log('values: ', values);
    dispatch(apiRegister(values));
    {
      error &&
        toast.error('Failed😢... If you already signup, please, log in!');
    }
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterUserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <h1>Register user form</h1>
        <div className={css.wrapper}>
          <label className={css.label}>
            Name
            <Field
              className={css.field}
              type="text"
              name="name"
              placeholder="User Name"
            />
          </label>
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
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
          Create new user
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
