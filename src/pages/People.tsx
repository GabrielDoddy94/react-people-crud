import { useContextSelector } from "use-context-selector";

import { PeopleContext } from "../contexts/PeopleContext";

import styles from "./People.module.scss";
import { Header } from "../components/Header";
import { PeopleList } from "../components/PeopleList";

export function People() {
  const people = useContextSelector(PeopleContext, context => {
    return context.people;
  });

  return (
    <>
      <Header />

      <main className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Data de Nascimento</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          {people.length !== 0 && <PeopleList />}
        </table>
      </main>
    </>
  );
}
