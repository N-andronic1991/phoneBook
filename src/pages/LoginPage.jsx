import LoginForm from '../components/loginForm/LoginForm';
import DocumentTitle from '../components/DocumentTitle';
import { Toaster } from 'react-hot-toast';
import Container from '../components/container/Container';

const LoginPage = () => {
  return (
    <>
      <DocumentTitle>Login</DocumentTitle>
      <Container>
        <LoginForm />
        <Toaster position="top-center" reverseOrder={false} />
      </Container>
    </>
  );
};

export default LoginPage;
