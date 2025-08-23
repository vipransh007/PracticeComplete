import { createContext, useState, useContext } from "react";

// The context is often not exported directly
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // 'async' is removed as setUser is synchronous
  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook is added for easy consumption
export function useAuth() {
  return useContext(AuthContext);
}