import { createContext, useState } from "react";

//CREACION DE CONTEXTO
export const UserContext = createContext();

// CREAR EL PROVIDER

export function UserProvider({ children }) {
  const [userName, setUserName] = useState("Guest");

  const changeUserName = (newName) => {
    setUserName(newName);
  };

  return (
    <UserContext.Provider value={{ userName, changeUserName }}>
      {children}
    </UserContext.Provider>
  );
}
