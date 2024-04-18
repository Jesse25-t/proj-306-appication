// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

const authentication = async () => {
  // Sign in to Firebase with GitHub authentication
  await gitHubSignIn();

  // Sign out of Firebase
  await firebaseSignOut();
};

// Use the useUserAuth hook to get the user object and the login and logout functions
// const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  return (
    <p>
      Welcome, {user.displayName} ({user.email})
    </p>
  );
}
