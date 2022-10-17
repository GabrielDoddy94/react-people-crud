import styles from "./Header.module.scss";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />

        <button className={styles.button}>Nova Pessoa</button>
      </div>
    </header>
  );
}
