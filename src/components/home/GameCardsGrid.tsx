import { GameCard } from "./GameCard"
import type { GameProps } from "../utilities/interfaces"


export function GameCardsGrid({ cardsArray}: { cardsArray: GameProps[]}) {
    return (
        <>
            {/* Transform the array into components (needs to check if the array exists)|*/}
            {cardsArray && cardsArray.map(card => (
                <GameCard
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    description={card.description}
                    imgSrc={card.imgSrc}
                    stars={card.stars}
                    console={card.console}
                />
            ))}
        </>

    )
}