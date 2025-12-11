import "./Header.css"
import { useState } from "react";

export function Header({ onGameSearch }: { onGameSearch: (value: string) => void }) {

     const [menuOpen, setMenuOpen] = useState(false);
     
    return (
        <div className="header-container">
            <div className="header-logo-container">
                <a href="./">

                    <img className="header-logo" src="images/Logo.png" alt="Logo"></img>

                </a>
                <h1 id="logo-text">React GameHub</h1>
            </div>
            <div className="header-search">
                <input className="search-input" placeholder="Search for a game..." onChange={(event) => {
                    onGameSearch(event.target.value)
                }}></input>
            </div>
            <div className="header-links">
                <a href="./about">About</a>
                <a href="./">Games</a>
            </div>

            <div 
                className={`hamburger ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span><span></span><span></span>
            </div>

            {/* MOBILE MENU */}
            <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
                <a href="/">Home</a>
                <a href="/about">About</a>
            </div>
        </div>
    )
}