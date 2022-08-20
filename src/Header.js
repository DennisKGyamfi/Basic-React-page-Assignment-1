import "./App.css";
import logo from "./logo.svg";

function Header() {
  return (
    <nav className="Nav-bar">
      <div className="Logo-section">
        <div>
          <img src={logo} className="Nav-logo" alt="logo" />
        </div>
        <div className="React-facts">ReactFacts</div>
      </div>
      <div className="Right">React Course - Project 1</div>
    </nav>
  );
}
export default Header;
