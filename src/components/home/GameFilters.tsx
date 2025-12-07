
import "./GameFilters.css"
import type { GameProps } from "../utilities/interfaces"

export function GameFilters({ cardsArray, onConsoleFilterChange }:
    {   
        // Array that will hold all the gameCards with the GameProps
        cardsArray: GameProps[], 

        // Function that will handle the filters (we need to pass the parameters and the return type)
        onConsoleFilterChange: (console: string, checked: boolean) => void
    }) {

    // Empty string which will hold all the unique console values from the gameCards array
    const uniqueConsoles: string[] = []

    // Only adding unique values to the uniqueConsoles array
    cardsArray.forEach(card => {
        if (!uniqueConsoles.includes(card.console)) {
            uniqueConsoles.push(card.console)
        }

    })

    // Returning a checkbox input with unique values
    return (
        <div className="filters-list">
            {uniqueConsoles.map(console => (
                <label key={console} className="checkbox-filters">
                    <input
                        type="checkbox"
                        title={console}
                        value={console}
                        onChange={(checkbox) => {

                            // When the checkbox is checked, add the console value that it holds, and set the bool to true/false 
                            onConsoleFilterChange(console, checkbox.target.checked)
                        }}
                    />
                    {console}
                </label>
            ))}
        </div>
    )

}