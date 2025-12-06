
import "./GameFilters.css"
import type { GameProps } from "../utilities/interfaces"
export function GameFilters({ cardsArray }: { cardsArray: GameProps[] }) {

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
                    <input type="checkbox" title={console} value={console} />
                    {console}
                </label>
            ))}
        </div>
    )

}