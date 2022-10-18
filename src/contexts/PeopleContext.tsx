import { useState, useEffect, ReactNode } from "react";
import { createContext } from "use-context-selector";

import { api } from "../lib/axios";

export interface People {
  id: number;
  name: string;
  email: string;
  birthdate: string;
}

interface CreatePeopleInput {
  name: string;
  email: string;
  birthdate: string;
}

interface PeopleContextType {
  people: People[];
  createPeople: (data: CreatePeopleInput) => Promise<void>;
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

  async function createPeople(data: CreatePeopleInput) {
    const response = await api.post("people", data);

    setPeople(state => [...state, response.data]);
  }

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <PeopleContext.Provider value={{ people, createPeople }}>
      {children}
    </PeopleContext.Provider>
  );
}
