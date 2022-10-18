import { useState, useEffect, ReactNode } from "react";
import { createContext } from "use-context-selector";

import { api } from "../lib/axios";

export interface People {
  id?: any;
  name: string;
  email: string;
  birthdate: string;
}

interface CreatePeopleInput {
  name: string;
  email: string;
  birthdate: string;
}

interface IsCreateOrEditPeople {
  data: People;
  edit: boolean;
}

interface PeopleContextType {
  people: People[];
  isCreateOrEditPeople: IsCreateOrEditPeople;
  createOrEditPeopleData: (isEdit: boolean, data: People) => void;
  createPeople: (data: CreatePeopleInput) => Promise<void>;
  updatePeople: (id: any, updatePeople: People) => Promise<void>;
  deletePeople: (id: any) => Promise<void>;
}

interface PeopleProviderProps {
  children: ReactNode;
}

export const PeopleContext = createContext({} as PeopleContextType);

export function PeopleProvider({ children }: PeopleProviderProps) {
  const [people, setPeople] = useState<People[]>([]);
  const [isCreateOrEditPeople, setIsCreateOrEditPeople] = useState({
    data: {} as People,
    edit: false,
  });

  async function fetchPeople() {
    const response = await api.get("people");

    setPeople(response.data);
  }

  async function createPeople(data: CreatePeopleInput) {
    const response = await api.post("people", data);

    setPeople(state => [...state, response.data]);
  }

  async function updatePeople(id: any, updateData: People) {
    const response = await api.put(`people/${id}`, updateData);

    setPeople(
      people.map(person => (person.id === id ? response.data : person))
    );

    setIsCreateOrEditPeople({ data: {} as People, edit: false });
  }

  async function deletePeople(id: any) {
    const response = await api.delete(`people/${id}`);

    setPeople(people.filter(person => person.id !== id));
  }

  function createOrEditPeopleData(isEdit: boolean, data: People) {
    if (isEdit) {
      setIsCreateOrEditPeople({
        data,
        edit: true,
      });
    } else {
      setIsCreateOrEditPeople({
        data,
        edit: false,
      });
    }
  }

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <PeopleContext.Provider
      value={{
        people,
        createPeople,
        isCreateOrEditPeople,
        createOrEditPeopleData,
        updatePeople,
        deletePeople,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
}
