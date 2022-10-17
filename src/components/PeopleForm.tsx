import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

import styles from "./PeopleForm.module.scss";

interface PeopleFormProps {
  isEditing?: boolean;
}

export function PeopleForm({ isEditing }: PeopleFormProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.overlay} />

      <Dialog.Content className={styles.content}>
        <Dialog.Title className={styles.title}>
          {isEditing ? "Editar Pessoa" : "Nova Pessoa"}
        </Dialog.Title>

        <Dialog.Close className={styles.button__close}>
          <X size={24} />
        </Dialog.Close>

        <form>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" required />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" required />

          <label htmlFor="birthdate">Data de Nascimento</label>
          <input type="date" id="birthdate" required />
          <button type="submit">Cadastrar</button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
