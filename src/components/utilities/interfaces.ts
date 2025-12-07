

// Creating a interface so we can assign a type the props for the games.json content

//export type Console = ["NES", "SNES", "Master System", "Mega Drive"]
export interface GameProps {
    id: number
    title: string;
    imgSrc: string;
    description: string;
    stars: number;
    console: string;
}

