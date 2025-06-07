import { useState } from "react";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <nav className="nav">
            <button className="hamburger" onClick={toggleMenu}>
                Menu
            </button>
            <ul className={`menu ${menuOpen ? "open" : ""}`}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default App;