import DocumentTitle from '../components/DocumentTitle';
import Container from '../components/container/Container';
const HomePage = () => {
  const styles = {
    title: {
      fontFamily: 'RobotoSlab',
      fontWeight: 700,
      fontSize: 32,
      textAlign: 'center',
      marginBottom: '20px',
      color: 'var(--main-title-text-color)',
    },
    text: {
      fontSize: 18,
      marginBottom: '20px',
      textAlign: 'center',
      color: 'var(--main-title-text-color)',
    },
    description: {
      fontSize: 16,
      textAlign: 'justify',
    },
  };

  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <Container>
        <h1 style={styles.title}>
          Welcome to Phonebook App
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>

        <p style={styles.text}>
          Organize and manage all your contacts in one place.
        </p>
        <p style={styles.description}>
          <b>The PhoneBook App</b> is a simple and efficient tool that allows
          users to easily manage their personal and professional contacts. You
          can <b>add</b>, <b>edit</b>, and <b>delete</b> contacts to keep your
          address book organized and up to date. Whether you&#39;re organizing
          friends, family, or business connections, the PhoneBook App makes it
          easy to stay connected.
        </p>
      </Container>
    </>
  );
};

export default HomePage;
