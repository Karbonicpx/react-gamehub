import { Header } from "../components/Header"
import { GameFilters } from "../components/home/GameFilters"
import { GameCardsGrid } from "../components/home/GameCardsGrid";
import { useState, useEffect } from "react"
import type { GameProps } from "../components/utilities/interfaces";
import "./HomePage.css"

export function HomePage() {

    const [gamesArray, setGamesArray] = useState<GameProps[]>([]);

    // Fetching value from games.json only one time 
    useEffect(() => {
        fetch("/games.json")
            .then(response => response.json())
            .then(data => {
                setGamesArray(data);
            })
    }, []);

    return (


        <>
            
            <div className="home-container">
                <Header/>
                <div className="filters-container">
                    <GameFilters cardsArray={gamesArray} />
                </div>

                <div className="card-grid">
                    <GameCardsGrid cardsArray={gamesArray} />
                </div>
            </div>


        </>

    )
}