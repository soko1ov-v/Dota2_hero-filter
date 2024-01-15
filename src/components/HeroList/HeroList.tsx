import { HeroListProps } from "@/utils/interfaces";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Hero } from "../Hero/Hero";
import styles from './HeroList.module.scss';

export function HeroList({ heroes }: HeroListProps) {
  return (
    <TransitionGroup className={styles.HeroList}>
      {heroes.map((hero) => (
        <CSSTransition key={hero.name} timeout={350} classNames={{
          enter: styles.heroItemEnter,
          enterActive: styles.heroItemEnterActive,
          exit: styles.heroItemExit,
          exitActive: styles.heroItemExitActive,
          exitDone: styles.heroItemExitDone,
        }}>
            <Hero hero={hero}/>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
