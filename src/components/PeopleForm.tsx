import { useContextSelector } from "use-context-selector";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

import { PeopleContext } from "../contexts/PeopleContext";

import styles from "./PeopleForm.module.scss";
import { useEffect, useMemo } from "react";

const peopleFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  birthdate: z.string(),
});

type PeopleFormInputs = z.infer<typeof peopleFormSchema>;

const mockPromise = async () =>
  await new Promise(resolve => setTimeout(resolve, 1000));

export function PeopleForm() {
  const { createPeople, updatePeople, isCreateOrEditPeople } =
    useContextSelector(PeopleContext, context => {
      return { ...context };
    });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<PeopleFormInputs>({
    resolver: zodResolver(peopleFormSchema),
  });

  useEffect(() => {
    if (isCreateOrEditPeople.edit === true) {
      reset(isCreateOrEditPeople.data);
    } else {
      reset({ name: "", email: "", birthdate: "" });
    }
  }, [isCreateOrEditPeople]);

  async function onSubmit(data: PeopleFormInputs) {
    if (isCreateOrEditPeople.edit === true) {
      await updatePeople(isCreateOrEditPeople.data.id, data);
    } else {
      await createPeople(data);
    }

    reset();
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.overlay} />

      <Dialog.Content className={styles.content}>
        <Dialog.Title className={styles.title}>
          {isCreateOrEditPeople.edit ? "Editar Pessoa" : "Nova Pessoa"}
        </Dialog.Title>

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
            {isCreateOrEditPeople.edit ? "Editar" : "Cadastrar"}
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
