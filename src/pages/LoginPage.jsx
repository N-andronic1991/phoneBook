import LoginForm from '../components/loginForm/LoginForm';
import DocumentTitle from '../components/DocumentTitle';
import { Toaster } from 'react-hot-toast';

const LoginPage = () => {
  return (
    <>
      <DocumentTitle>Login</DocumentTitle>
      <LoginForm />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default LoginPage;
