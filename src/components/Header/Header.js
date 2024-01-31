import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="header__title">Ucwalmícwts</h1>
      </header>
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__item">About</li>
          <li className="navbar__item">Sounds</li>
          <li className="navbar__item">Flash Cards</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
