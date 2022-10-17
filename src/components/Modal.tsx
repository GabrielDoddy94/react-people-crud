import { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { PeopleForm } from "./PeopleForm";

interface ModalProps {
  children: ReactNode;
}

export function Modal({ children }: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <PeopleForm />
    </Dialog.Root>
  );
}
