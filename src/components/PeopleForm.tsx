import { useContextSelector } from "use-context-selector";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

import { PeopleContext } from "../contexts/PeopleContext";

import styles from "./PeopleForm.module.scss";

const peopleFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  birthdate: z.string(),
});

type PeopleFormInputs = z.infer<typeof peopleFormSchema>;

export function PeopleForm() {
  const createPeople = useContextSelector(PeopleContext, context => {
    return context.createPeople;
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<PeopleFormInputs>({
    resolver: zodResolver(peopleFormSchema),
  });

  async function onSubmit(data: PeopleFormInputs) {
    await createPeople(data);

    reset();
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.overlay} />

      <Dialog.Content className={styles.content}>
        <Dialog.Title className={styles.title}>Nova Pessoa</Dialog.Title>

        <Dialog.Close className={styles.button__close}>
          <X size={24} />
        </Dialog.Close>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" required {...register("name")} />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" required {...register("email")} />

          <label htmlFor="birthdate">Data de Nascimento</label>
          <input
            type="date"
            id="birthdate"
            required
            {...register("birthdate")}
          />
          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
