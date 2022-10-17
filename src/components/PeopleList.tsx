import { PeopleItem } from "./PeopleItem";

const persons = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jon@example.com",
    birthdate: "04/08/1994",
  },
  {
    id: 2,
    name: "Daenerys Targaryen",
    email: "daenerys@example.com",
    birthdate: "04/08/1994",
  },
  {
    id: 3,
    name: "Tyrion Lannister",
    email: "tyrion@example.com",
    birthdate: "04/08/1994",
  },
  {
    id: 4,
    name: "Arya Stark",
    email: "arya@example.com",
    birthdate: "04/08/1994",
  },
];

export function PeopleList() {
  return (
    <tbody>
      {persons.map(person => (
        <PeopleItem
          key={person.id}
          name={person.name}
          email={person.email}
          birthdate={person.birthdate}
        />
      ))}
    </tbody>
  );
}
