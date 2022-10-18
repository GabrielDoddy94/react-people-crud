import { useContextSelector } from "use-context-selector";

import { PeopleContext } from "../contexts/PeopleContext";

import { PeopleItem } from "./PeopleItem";

export function PeopleList() {
  const people = useContextSelector(PeopleContext, context => {
    return context.people;
  });

  return (
    <tbody>
      {people.map(person => (
        <PeopleItem key={person.id} item={person} />
      ))}
    </tbody>
  );
}
