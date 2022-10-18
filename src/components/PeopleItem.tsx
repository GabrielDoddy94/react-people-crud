import { useContextSelector } from "use-context-selector";
import { Pencil, Trash } from "phosphor-react";

import { PeopleContext, People } from "../contexts/PeopleContext";
import { formatBirthdateToDisplay } from "../utils/formatBirthdateToDisplay";

import { Modal } from "./Modal";

import styles from "./PeopleItem.module.scss";

interface PeopleItemProps {
  item: People;
}

export function PeopleItem({ item }: PeopleItemProps) {
  const { deletePeople, createOrEditPeopleData } = useContextSelector(
    PeopleContext,
    context => {
      return { ...context };
    }
  );

  function editPeopleFormData() {
    const { id, name, email, birthdate } = item;

    const editValues = {
      id,
      name,
      email,
      birthdate,
    };

    createOrEditPeopleData(true, editValues);
  }

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{formatBirthdateToDisplay(item.birthdate)}</td>
      <td>
        <div className={styles.button__box}>
          <Modal>
            <button
              className={styles.button__edit}
              onClick={editPeopleFormData}
            >
              <Pencil size={20} />
            </button>
          </Modal>
          <button
            className={styles.button__delete}
            onClick={() => deletePeople(item.id)}
          >
            <Trash size={20} />
          </button>
        </div>
      </td>
    </tr>
  );
}
