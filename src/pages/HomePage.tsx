import { Header } from "../components/Header"
import { GameFilters } from "../components/home/GameFilters"
import { GameCardsGrid } from "../components/home/GameCardsGrid";
import { useState, useEffect } from "react"
// import type { Filters } from "../components/utilities/interfaces";
import type { GameProps } from "../components/utilities/interfaces";
import "./HomePage.css"


export function HomePage() {

    // State that will control the games that will appear in the homePage
    const [gamesArray, setGamesArray] = useState<GameProps[]>([]);

    // State that will control all the consoleFilters
    const [consoleFilters, setConsoleFilters] = useState<string[]>([]);



    function handleConsoleFilter(console: string, isChecked: boolean) {
        setConsoleFilters(isChecked
            ? [...consoleFilters, console] // This means that the consoleFilters is adding the new console to the existing array (spread operator)
            : consoleFilters.filter(c => c !== console)
        );
    }

    // Fetching value from games.json only one time 
    useEffect(() => {
        fetch("/games.json")
            .then(response => response.json())
            .then(data => {
                setGamesArray(data);
            })
    }, []);

    // Array with the filtered games. If there is no filter, show all the games, if there is at least one, filter the gamesArray
    const filteredGamesArray = consoleFilters.length === 0 ?
        gamesArray :
        gamesArray.filter(game => consoleFilters.includes(game.console))

    return (


        <>

            <div className="home-container">
                <Header />
                <div className="filters-container">
                    <GameFilters cardsArray={gamesArray} onConsoleFilterChange={handleConsoleFilter} />
                </div>

                <div className="card-grid">
                    {/* Sorting by console */}
                    <GameCardsGrid cardsArray={filteredGamesArray.sort((a, b) => a.console.localeCompare(b.console))} />
                </div>
            </div>


        </>

    )
}