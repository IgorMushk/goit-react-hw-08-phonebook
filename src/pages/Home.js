import { useAuth } from "hooks";
import { selectIsLoggedIn } from "redux/auth/selectors";

const styles = {
    container: {
      minHeight: 'calc(100vh - 50px)',
      //display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 500,
      fontSize: 48,
      textAlign: 'center',
    },
    titleAuth: {
      fontWeight: 400,
      fontSize: 32,
      textAlign: 'center',
    },
  };
  
  export default function Home() {
    const { isLoggedIn } = useAuth();
    
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>
        Phonebook manager welcome page
        </h1>
        {!isLoggedIn && <h2 style={styles.titleAuth}> Please Authorize...</h2>}
      </div>
    );
  }
  