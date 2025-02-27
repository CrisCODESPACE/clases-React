import "../style/header.css";

const Header = () => {
  return (
    <div className="div-header">
      <div className="img-container">
        <img
          src="https://th.bing.com/th/id/OIP.pW0TOZyl_OZMIuo5HjUsyQHaIf?rs=1&pid=ImgDetMain"
          alt="Logo"
        />
      </div>

      <nav className="header-nav">
        <ul className="header-list">
          <li>Home</li>
          <li>Catálogo</li>
          <li>Carrito</li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
