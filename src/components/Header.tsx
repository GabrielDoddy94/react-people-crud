import { useContextSelector } from "use-context-selector";

import { PeopleContext } from "../contexts/PeopleContext";

import styles from "./Header.module.scss";
import { Logo } from "./Logo";
import { Modal } from "./Modal";

export function Header() {
  const { createOrEditPeopleData } = useContextSelector(
    PeopleContext,
    context => {
      return { ...context };
    }
  );

  function createPeopleFormData() {
    createOrEditPeopleData(false, {
      name: "",
      birthdate: "",
      email: "",
    });
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />

        <Modal>
          <button className={styles.button} onClick={createPeopleFormData}>
            Nova Pessoa
          </button>
        </Modal>
      </div>
    </header>
  );
}
