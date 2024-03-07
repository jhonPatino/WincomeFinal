import { createContext } from "react";

const MovementContext = createContext();

export const MovementContextProvider = ({ children }) => {
  return (
    <MovementContext.Provider value={{}}>{children}</MovementContext.Provider>
  );
};
