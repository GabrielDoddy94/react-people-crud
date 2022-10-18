import { Pencil, Trash } from "phosphor-react";

import { People } from "../contexts/PeopleContext";
import { formatBirthdateToDisplay } from "../utils/formatBirthdateToDisplay";

import { Modal } from "./Modal";

import styles from "./PeopleItem.module.scss";

interface PeopleItemProps {
  item: People;
}

export function PeopleItem({ item }: PeopleItemProps) {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{formatBirthdateToDisplay(item.birthdate)}</td>
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
