import React, { createContext, useContext, useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";

// Create AuthContext
const AuthContext = createContext();

// AuthProvider wraps your whole app
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // On first mount, load user from localStorage
  useEffect(() => {
    const token = localStorage.getItem("astroAuthToken");
    if (token) {
      try {
        setUser(jwtDecode(token));
      } catch (e) {
        setUser(null);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for easy use in any component
export function useAuth() {
  return useContext(AuthContext);
}
