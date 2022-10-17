import { Pencil, Trash } from "phosphor-react";

import { Modal } from "./Modal";

import styles from "./PeopleItem.module.scss";

interface PersonItemProps {
  name: string;
  email: string;
  birthdate: string;
}

export function PeopleItem({ name, email, birthdate }: PersonItemProps) {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{birthdate}</td>
      <td>
        <div className={styles.button__box}>
          <Modal>
            <button className={styles.button__edit}>
              <Pencil size={20} />
            </button>
          </Modal>
          <button className={styles.button__delete}>
            <Trash size={20} />
          </button>
        </div>
      </td>
    </tr>
  );
}
