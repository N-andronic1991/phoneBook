import RegistrationForm from '../components/registrationForm/RegistrationForm';
import DocumentTitle from '../components/DocumentTitle';
import { Toaster } from 'react-hot-toast';
import Container from '../components/container/Container';
const RegistrationPage = () => {
  return (
    <>
      <DocumentTitle>Registration</DocumentTitle>
      <Container>
        <RegistrationForm />
        <Toaster position="top-center" reverseOrder={false} />
      </Container>
    </>
  );
};

export default RegistrationPage;
