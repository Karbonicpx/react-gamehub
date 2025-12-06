

// Creating a interface so we can assign a type the props for the games.json content
export interface GameProps {
    title: string;
    imgSrc: string;
    description: string;
    stars: number;
    console: string;
}