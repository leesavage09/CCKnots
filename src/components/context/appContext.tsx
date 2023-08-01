import React, { createContext, useContext } from "react";
import { Pro, usePro } from "../hooks/usePro";

type AppContextType = { pro: Pro } | { pro: undefined };

export const AppContext = createContext<AppContextType>({ pro: undefined });

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const pro = usePro();

  return <AppContext.Provider value={{ pro }}>{children}</AppContext.Provider>;
};

export const useAppState = () => useContext(AppContext);
