import { useState, useEffect, ReactNode } from "react";
import { createContext } from "use-context-selector";

import { api } from "../lib/axios";

export interface People {
  id: number;
  name: string;
  email: string;
  birthdate: string;
}

interface PeopleContextType {
  people: People[];
}

interface PeopleProviderProps {
  children: ReactNode;
}

export const PeopleContext = createContext({} as PeopleContextType);

export function PeopleProvider({ children }: PeopleProviderProps) {
  const [people, setPeople] = useState<People[]>([]);

  async function fetchPeople() {
    const response = await api.get("people");

    setPeople(response.data);
  }

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <PeopleContext.Provider value={{ people }}>
      {children}
    </PeopleContext.Provider>
  );
}
