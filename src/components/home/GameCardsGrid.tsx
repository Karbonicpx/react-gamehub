import { GameCard } from "./GameCard"
import type { GameCardProps } from "./GameCard"

// Interface para o array de cards
interface GameCardArray {
    cardsArray: GameCardProps[]
}

export function GameCardsGrid({ cardsArray }: GameCardArray) {
    return (
        <>
            {/* Transform the array into components (needs to check if the array exists)|*/}
            {cardsArray && cardsArray.map(card => (
                <GameCard
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    imgSrc={card.imgSrc}
                    stars={card.stars}
                />
            ))}
        </>

    )
}