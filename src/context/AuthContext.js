import { createContext, useState, useEffect } from "react";
import { api } from "../api/api";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const res = await api.getUserInfo();
      const responce = await res.json();
      setCurrentUser(responce);    
    };
    fetchData();
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
