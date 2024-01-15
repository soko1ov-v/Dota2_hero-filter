import styles from "./HeroesFilterHeader.module.scss";

export function HeroesFilterHeader() {
  return (
    <header className={styles.FilterHeader}>
      <h1 className={styles.FilterHeader__title}>CHOOSE YOUR HERO</h1>
      <p className={styles.FilterHeader__info}>
        From magical tacticians to fierce brutes and cunning rogues, Dota 2's
        hero pool is massive and limitlessly diverse. Unleash incredible
        abilities and devastating ultimates on your way to victory.
      </p>
    </header>
  );
}
