import { Header } from "../components/Header"
import { GameFilters } from "../components/home/GameFilters"
import { GameCardsGrid } from "../components/home/GameCardsGrid";
import type { GameProps } from "../types/interfaces";
import { useState, useEffect } from "react"
import "./HomePage.css"


export function HomePage() {
    const [allGames, setAllGames] = useState<GameProps[]>([]); // State that holds all games, never changes
    const [consoleFilters, setConsoleFilters] = useState<string[]>([]); // State that holds the filters for displaying games
    const [searchTerm, setSearchTerm] = useState<string>(""); // State that hill hold the filter of the search bar
    const [displayedGames, setDisplayedGames] = useState<GameProps[]>([]); // State that will hold all the game cards which are on the screen
    const [exitingIds, setExitingIds] = useState<number[]>([]); // State that will hold the game card ids which will diplay the exit animation
    const [enteringIds, setEnteringIds] = useState<number[]>([]); // State that will hold the game card ids which will diplay the entrance animation

    // Load games on mount
   useEffect(() => {
    fetch("/games.json")
        .then(response => response.json())
        .then((data: GameProps[]) => {
            setAllGames(data);
            setDisplayedGames(data);

            // Trigger entry animation for ALL cards on first load
            setEnteringIds(data.map(g => g.id));

            // Remove entering state after animation completes
            setTimeout(() => {
                setEnteringIds([]);
            }, 600 + data.length * 4);
        });
}, []);



    // Apply filters with exit and entering animation
    const applyFiltersWithAnimation = (newFilters: string[], newSearch: string) => {

    // What this basically does is collecting all games with the filters applied
    const newVisibleGames = allGames.filter(game => {
        const matchesConsole = newFilters.length === 0 || newFilters.includes(game.console);
        const matchesSearch = newSearch === "" || game.title.toLowerCase().includes(newSearch.toLowerCase());
        return matchesConsole && matchesSearch;
    });

    // Remove games that are already included in displayedGames
    const removedGames = displayedGames.filter(
        game => !newVisibleGames.some(g => g.id === game.id)
    );

    // Adding games to newVisibleGames
    const addedGames = newVisibleGames.filter(
        game => !displayedGames.some(g => g.id === game.id)
    );

    // If there is any removed game, do the exit animation
    if (removedGames.length > 0) {

        // Updating the state
        setExitingIds(removedGames.map(g => g.id));

        // Animation delay
        setTimeout(() => {

            // Update the displayed games
            setDisplayedGames(newVisibleGames);

            // Mark the new cards as entering
            setEnteringIds(addedGames.map(g => g.id));

            // Clean the exiting state
            setExitingIds([]);

            // Stop the entering animation after 500 ms
            setTimeout(() => {
                setEnteringIds([]);
            }, 600 + addedGames.length * 4);

        }, 600 + addedGames.length * 4);
    } else {
        // If there are none removed, appear with the entrance animation
        setDisplayedGames(newVisibleGames);

        setEnteringIds(addedGames.map(g => g.id));

        setTimeout(() => {
            setEnteringIds([]);
        }, 600 + addedGames.length * 4);
    }
};


    // Handle console filter changes
    const handleConsoleFilter = (console: string, isChecked: boolean) => {
        const newFilters = isChecked
            ? [...consoleFilters, console]
            : consoleFilters.filter(c => c !== console);
        
        // Updating the state of the filters
        setConsoleFilters(newFilters);

        // Updating the state of the animations
        applyFiltersWithAnimation(newFilters, searchTerm);
    };

    // Handle search bar input filter
    const handleSearchBar = (input: string) => {
        setSearchTerm(input);
        applyFiltersWithAnimation(consoleFilters, input);
    };

    // Open ROM in new window
    const handlePlayROM = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <div className="home-container">
            <Header onGameSearch={handleSearchBar} />
            
            <div className="filters-container">
                <GameFilters 
                    cardsArray={allGames} 
                    onConsoleFilterChange={handleConsoleFilter}
                />
            </div>

            <div className="card-grid">
                <GameCardsGrid
                    cardsArray={displayedGames.sort((a, b) => 
                        a.console.localeCompare(b.console)
                    )}
                    onPlay={handlePlayROM}
                    exitingIds={exitingIds}
                    enteringIds={enteringIds}
                />
            </div>
        </div>
    );
}