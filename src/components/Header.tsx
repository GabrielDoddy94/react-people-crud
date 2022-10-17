import styles from "./Header.module.scss";
import { Logo } from "./Logo";
import { Modal } from "./Modal";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />

        <Modal>
          <button className={styles.button}>Nova Pessoa</button>
        </Modal>
      </div>
    </header>
  );
}
