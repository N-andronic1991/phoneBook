import RegistrationForm from '../components/registrationForm/RegistrationForm';
import DocumentTitle from '../components/DocumentTitle';
import { Toaster } from 'react-hot-toast';
const RegistrationPage = () => {
  return (
    <>
      <DocumentTitle>Registration</DocumentTitle>
      <RegistrationForm />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default RegistrationPage;
