import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyPortfolio</h2>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
