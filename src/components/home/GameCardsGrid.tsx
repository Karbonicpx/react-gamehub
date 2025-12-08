import { GameCard } from "./GameCard"
import type { GameProps } from "../../types/interfaces"


export function GameCardsGrid({ cardsArray, onPlay}: { cardsArray: GameProps[], onPlay: (rom: string) => void}) {
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
                    romPath={card.romPath}
                    onPlay={onPlay}
                />
            ))}
        </>

    )
}