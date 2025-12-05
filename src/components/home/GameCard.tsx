
import "./GameCard.css"
// Creating a interface so we can assign a type the props of the GameCard component
export interface GameCardProps {
    title: string;
    imgSrc: string;
    description: string;
    stars: string;
}

// GameCard component, which will display in the main page to be chosen by the player
export function GameCard( {title, imgSrc, description, stars}: GameCardProps ){


    return(
        <div className="card-container">
            <h1 className="card-title"> {title} </h1>
            <img className="card-image" src={imgSrc} alt="Game Image"></img>
            <p className="card-description">{description}</p>
            <p className="card-stars">{stars}</p>
        </div>
    )
}