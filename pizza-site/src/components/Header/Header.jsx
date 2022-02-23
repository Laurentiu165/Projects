import "./Header.css"

export function Header(){
  return(
    <div className="app-header">
      <nav className="navbar">
        <div className="max-width">
          <p className="logo">Michelangelo's</p>
          <ul className="navigation">
            <li><a href="#section-home" className="nav-button">Home</a></li>
            <li><a href="#section-offers" className="nav-button">Offers</a></li>
            <li><a href="#section-own" className="nav-button">Make your pizza</a></li>
            <li><a href="#section-contact" className="nav-button">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}