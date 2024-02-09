import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="header__title">Ucwalmícwts</h1>
      </header>
      <nav className="navbar">
        <ul className="navbar__list">
          {/* <li>
            <NavLink to="/about" className="navbar__item">
              About
            </NavLink>
          </li> */}
          <li className="navbar__item">
            <NavLink to="/" className="navbar__link">
              Sounds
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/game" className="navbar__link">
              Flash Cards
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
