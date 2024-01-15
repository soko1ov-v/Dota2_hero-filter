import styles from "./HeroesFilterHeader.module.scss";

export function HeroesFilterHeader() {
  return (
    <header className={styles.HeroesFilterHeader}>
      <h1 className={styles.HeroesFilterHeaderTitle}>CHOOSE YOUR HERO</h1>
      <p className={styles.HeroesFilterHeaderInfo}>
        From magical tacticians to fierce brutes and cunning rogues, Dota 2's
        hero pool is massive and limitlessly diverse. Unleash incredible
        abilities and devastating ultimates on your way to victory.
      </p>
    </header>
  );
}
