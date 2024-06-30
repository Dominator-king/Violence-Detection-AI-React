import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import React from "react";

const AuthContext = React.createContext();
export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [userLoggedIn, setUserLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ ...user });
        setUserLoggedIn(true);
      } else {
        setUserLoggedIn(false);
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, userLoggedIn }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
