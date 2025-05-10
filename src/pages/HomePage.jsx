import DocumentTitle from '../components/DocumentTitle';
const HomePage = () => {
  const styles = {
    container: {
      minHeight: 'calc(100vh - 50px)',
      margin: '0 auto',
      padding: '100px 40px 40px 40px',
    },
    title: {
      fontWeight: 500,
      fontSize: 48,
      textAlign: 'center',
      marginBottom: '20px',
    },
    text: {
      fontSize: 24,
      marginBottom: '20px',
      textAlign: 'center',
    },
    description: {
      fontSize: 18,
    },
  };

  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div style={styles.container}>
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
      </div>
    </>
  );
};

export default HomePage;
