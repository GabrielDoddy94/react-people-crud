import { ReactNode } from "react";
import { createContext } from "use-context-selector";

import { api } from "../lib/axios";

interface PeopleProviderProps {
  children: ReactNode;
}

export const PeopleContext = createContext({});

export function PeopleProvider({ children }: PeopleProviderProps) {
  return <PeopleContext.Provider value={{}}>{children}</PeopleContext.Provider>;
}
