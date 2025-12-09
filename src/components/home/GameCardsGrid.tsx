import { GameCard } from "./GameCard"
import type { GameProps } from "../../types/interfaces"


export function GameCardsGrid({ cardsArray, onPlay, exitingIds, enteringIds}: { cardsArray: GameProps[], onPlay: (rom: string) => void, exitingIds: number[], enteringIds: number[] }) {

    
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
                    romURL={card.romURL}
                    onPlay={onPlay}
                    isExiting={exitingIds.includes(card.id)}
                    isEntering={enteringIds.includes(card.id)}
                />
            ))}
        </>

    )
}