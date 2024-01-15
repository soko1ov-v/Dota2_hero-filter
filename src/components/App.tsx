"use client"

import { FilterHeroesWrapper } from "./FilterHeroesWrapper/FilterHeroesWrapper";
import { HeroesFilterHeader } from "./HeroFilterHeader/HeroesFilterHeader";

export function App() {

    return (
        <>
            <HeroesFilterHeader />
            <FilterHeroesWrapper />
        </>
    )
}