import { Header } from "../components/Header"
import { GameFilters } from "../components/home/GameFilters"
import { GameCardsGrid } from "../components/home/GameCardsGrid";
import { useState, useEffect } from "react"
import type { GameCardProps } from "../components/home/GameCard";
import "./HomePage.css"

export function HomePage() {

    const [gamesArray, setGamesArray] = useState<GameCardProps[]>([]);

    useEffect(() => {
        fetch("/games.json")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setGamesArray(data);
            })
    }, []);

    return (


        <>
            
            <div className="home-container">
                <Header/>
                <div className="filters-container">
                    <GameFilters />
                </div>

                <div className="card-grid">
                    <GameCardsGrid cardsArray={gamesArray} />
                </div>
            </div>


        </>

    )
}