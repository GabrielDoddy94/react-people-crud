import styles from "./People.module.scss";
import { Header } from "../components/Header";
import { PeopleList } from "../components/PeopleList";

export function People() {
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
          <PeopleList />
        </table>
      </main>
    </>
  );
}
