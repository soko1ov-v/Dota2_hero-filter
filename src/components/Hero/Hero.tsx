import { HeroProps } from "@/utils/interfaces";
import Image from "next/image";
import { heroAttrs } from "@/utils/filterHeroes";
import styles from "./Hero.module.scss";

export function Hero({ hero }: { hero: HeroProps }) {

    return (
        <div className={styles.HeroItemContainer} key={hero.name}>
            <a
                className={styles.HeroLink}
                href="#"
                key={hero.name}
                style={{
                    backgroundImage: `url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero.name.replace(
                        "npc_dota_hero_",
                        ""
                    )}.png)`,
                    left: "calc(122px + 0%)",
                    top: "calc(142px)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            ></a>
            <div className={styles.HeroInfo}>
                {hero.primary_attr !== undefined && (
                    <div className={styles.AttrIconContainer}>
                        <Image
                            className={styles.HeroAttrImg}
                            src={heroAttrs[hero.primary_attr]}
                            alt="hero-attr"
                            width={45}
                            height={45}
                        />
                    </div>
                )}
                <p className={styles.HeroName}>{hero.name_loc}</p>
            </div>
        </div>
    )
}