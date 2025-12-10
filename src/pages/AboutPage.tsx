import { Header } from "../components/Header";
import "./AboutPage.css"
export function AboutPage() {
    return (
        <>
            <Header onGameSearch={() => { }}></Header>
            <div className="about-container">
                <nav className="about-nav">
                    <a href="#what-is">What is this website?</a>
                    <a href="#how-works">How does it work?</a>
                    <a href="#goals">Project Goals</a>
                    <a href="#tech">Technologies Used</a>
                    <a href="#future">Future Features</a>
                </nav>

                {/* Section 1 — What is this website? */}
                <h1 id="what-is" className="section-title">What is this website?</h1>
                <p>
                    This website is a personal project designed to provide a clean, simple and dynamic
                    experience for browsing classic retro games. Instead of using embedded emulators,
                    the website now redirects the user to reliable external sources where the game can
                    be played instantly. The interface focuses on clarity, fast filtering, and smooth
                    animations to create a modern experience around old-school games.
                </p>

                <img className="about-image" src="/images/homepage.png" alt="Homepage preview" />

                {/* Section 2 — How does it work? */}
                <h1 id= "how-works" className="section-title">How does it work?</h1>
                <p>
                    All available games are stored inside a JSON file that contains essential information,
                    such as the title, console, description, rating and a direct link to a playable version
                    of the game. The homepage loads this data on startup and displays each game through a
                    responsive card system. You can search for specific titles, filter by console, and see
                    real-time animated transitions whenever the available results change.
                </p>

                <p>
                    Each card has a unique entrance and exit animation, making the interface feel alive
                    and reactive. When selecting a game, the site simply opens the corresponding play
                    URL in a new tab—fast, lightweight and practical.
                </p>

                <img className="about-image-vertical" src="/images/filters.png" alt="Filters screenshot" />

                {/* Section 3 — Project Goals */}
                <h1 id="goals" className="section-title">Project Goals</h1>
                <p>
                    The main goal of this project is to practice modern frontend development using
                    React, improving component structure, state management, animations and UI/UX design.
                    The project also serves as a personal collection of classic games, displayed in a
                    polished and enjoyable format.
                </p>

                <p>
                    Additional goals include experimenting with complex animations, building reusable
                    components, and organizing real-world data structures through JSON files. The project
                    may evolve over time with new consoles, visual improvements or additional features.
                </p>

                <img className="about-image" src="/images/grid.png" alt="Games grid screenshot" />

                {/* Section 4 — Technologies Used */}
                <h1 id="tech" className="section-title">Technologies Used</h1>
                <p>- React + TypeScript</p>
                <p>- React Router</p>
                <p>- CSS custom animations</p>
                <p>- JSON-based dynamic game library</p>
                <p>- Responsive design for desktop and mobile</p>

                <img className="about-image-vertical" src="/images/code.png" alt="Code screenshot" />

                {/* Section 5 — Future Features */}
                <h1 id="future" className="section-title">Future Features</h1>
                <p>
                    This project is still growing. Planned improvements include adding more consoles,
                    improving the search algorithm, creating more polished transitions, and potentially
                    adding a favorites system that allows users to bookmark their preferred games.
                </p>

            </div>
        </>
    );
}
