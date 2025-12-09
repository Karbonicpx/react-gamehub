import "./Header.css"
export function Header({ onGameSearch }: { onGameSearch: (value: string) => void }) {

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
                <a>About</a>
                <a>FAQ</a>
                <a href="./">Games</a>
            </div>
        </div>
    )
}