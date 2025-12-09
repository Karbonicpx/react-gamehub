
import "./GameCard.css"
import type { GameProps } from "../../types/interfaces";
// Creating a interface so we can assign a type the props of the GameCard component

// GameCard component, which will display in the main page to be chosen by the player
export function GameCard({ title, imgSrc, description, stars, romURL, onPlay, isExiting, isEntering }: GameProps & { isExiting: boolean, isEntering: boolean }) {


    // This function will generate a star component. If it is empty or full, the isEmpty parameter will define it
    function createStar(k: number, isEmpty: boolean) {
        return (<img key={k} className="star-img" src={isEmpty ? "images/Empty Star.png" : "images/Full Star.png"} alt="Star" />)
    }


    // This function will generate both empty and full stars, based on the number given by the stars prop
    function generateStars() {

        // From creates an array in javaScript, using only the length prop
        // What this code is doing, is basically generating two arrays: one for full stars and one for empty ones
        // If the length is smaller than 5, that means that at least 1 empty star will be generated (that's why length: 5 - stars in the second array)
        // In this case, the second array will create empty stars
        return Array.from({ length: stars }, (_, i) => createStar(i, false)).concat(
            Array.from({ length: 5 - stars }, (_, i) => createStar(stars + i, true))
        );
    }

    // Plays the rom in the romURL
    function playROM() {
        onPlay(romURL);
    }

    // The card container will display an animation depending on the animation state he's in
    return (
        <div
            className={`
            card-container
            ${isExiting ? "exiting" : ""}
            ${isEntering ? "entering" : ""}
            ${!isExiting && !isEntering ? "visible" : ""}
        `}
            onClick={playROM}
        >
            <h1 className="card-title">{title}</h1>
            <img className="card-image" src={imgSrc} alt="Game Image" />
            <p className="card-description">{description}</p>
            <p className="card-stars">{generateStars()}</p>
        </div>
    );
}