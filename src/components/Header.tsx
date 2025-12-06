import "./Header.css"
export function Header() {

    return (
        <div className="header-container">
            <div className="header-logo-container">
                <a href="./">

                    <img className="header-logo" src="images/Logo.png" alt="Logo"></img>

                </a>
                <h1 id = "logo-text">React GameHub</h1>
            </div>
            <div className="header-search">
                <img className ="search-icon" src="images/Search Icon.png" alt="Search Icon"></img>
                <input className="search-input" placeholder="Search for a game..."></input>
            </div>
            <div className="header-links">
                <a>About</a>
                <a>FAQ</a>
                <a>Games</a>
            </div>
        </div>
    )
}