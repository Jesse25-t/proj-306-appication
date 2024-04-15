import { useContext, createContext, useState, useEffect } from "react";
import { auth } from "@/app/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsuscribe = onAuthStaeChanged(auth, initializeUser);
    return unsuscribe;
  }, []);
  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(user);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(null);
    }
    setLoading(false);
  }
  const value = {
    currentUser,
    userLoggedIn,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
