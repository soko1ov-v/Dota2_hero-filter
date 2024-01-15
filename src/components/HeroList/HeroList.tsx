import { HeroListProps } from "@/utils/interfaces";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Hero } from "../Hero/Hero";
import styles from './HeroList.module.scss';

export function HeroList({ heroes }: HeroListProps) {
  return (
    <TransitionGroup className={styles.HeroList}>
      {heroes.map((hero) => (
        <CSSTransition key={hero.name} timeout={350} classNames={{
          enter: styles.HeroItemEnter,
          enterDone: styles.HeroItemEnterDone,
          enterActive: styles.HeroItemEnterActive,
          exit: styles.HeroItemExit,
          exitActive: styles.HeroItemExitActive,
          exitDone: styles.HeroItemExitDone,
        }}>
            <Hero hero={hero}/>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
