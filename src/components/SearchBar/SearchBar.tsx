import { SearchBarProps } from "@/utils/interfaces";
import { Button } from "../Button";
import { Input } from "../Input";
import { SearchIcon } from "../icons/SearchIcon";
import styles from "./SearchBar.module.scss";

const attributes: { [key: string]:  { image: string; text: string; value: number } } = {
  0: {
   image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-str-active.png",
   text: "str",
   value: 0
  },
  1: {
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png",
    text: "agi",
    value: 1
  },
  2: {
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-int-active.png",
    text: "int",
    value: 2
  },
  3: {
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-uni-active.png",
    text: "uni",
    value: 3
  },
};

const complexityMap: { [key: string]: { image: string; value: number } } = {
  1: {
    image:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png",
    value: 1,
  },
  2: {
    image:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png",
    value: 2,
  },
  3: {
    image:
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png",
    value: 3,
  },
};

export function SearchBar({
  complexity,
  attrActive,
  query,
  onChange,
  onClick,
  onComplClick,
}: SearchBarProps) {
  return (
    <div className={styles.SearchBar}>
      <h3 className={styles.SearchBarTitle}>FILTER HEROES</h3>
      <div className={styles.AttrFilterContainer}>
        <h3 className={styles.FilterTitle}>ATTRIBUTE</h3>
        {Object.keys(attributes).map((attr) => {
          return (
            <Button
              key={attr}
              className={`AttrBtn btn ${
                attrActive === attributes[attr].value ? "btn--active" : ""
              }`}
              text={attributes[attr].text}
              onClick={() => onClick(attributes[attr].value)}
              style={{ backgroundImage: `url(${attributes[attr].image})` }}
            />
          );
        })}
      </div>

      <div className={styles.ComplFilterContainer}>
        <h3 className={styles.FilterTitle}>COMPLEXITY</h3>
        {Object.keys(complexityMap).map((comp) => {
          return (
            <Button
              key={comp}
              className={`ComplBtn btn ${
                complexity >= complexityMap[comp].value ? "btn--active" : ""
              }`}
              onClick={() => onComplClick(complexityMap[comp].value)}
              style={{
                backgroundImage: `url(${complexityMap[comp].image})`,
              }}
            />
          );
        })}
      </div>

      <div className={styles.HeroSearchContainer}>
        <SearchIcon />
        <form>
          <Input
            onChange={onChange}
            className={styles.HeroSearchInput}
            value={query}
          />
        </form>
      </div>
    </div>
  );
}
