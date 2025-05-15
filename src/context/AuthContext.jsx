// context/AuthContext.js
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    // Load user from localStorage if available
    const user = localStorage.getItem("chat-user"); // or whatever key you're using
    if (user) {
      setAuthUser(JSON.parse(user));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
