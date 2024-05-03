import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { apiAddContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };
  const notify = () => toast('The contact was added succesfully');
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(apiAddContact(values));
    notify();
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label className={css.label}>
            Name
            <Field className={css.field} type="text" name="name" />
          </label>
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div className={css.wrapper}>
          <label className={css.label}>
            Numbers
            <Field className={css.field} type="text" name="number" />
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </label>
        </div>

        <button className={css.submitBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
