import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-custom">
      <div className="container-fluid">
        <Link className="navbar-brand nav-link-custom brand-hover-border" to="/">
          Astro Sarthi
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon toggler-white"></span>
        </button>
        <div className="collapse navbar-collapse nav-collapse-center" id="navbarNav">
          <ul className="navbar-nav nav-center-items">
            <li className="nav-item">
              <Link className="nav-link nav-link-custom navlink-hover-style" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom navlink-hover-style" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom navlink-hover-style" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-light login-hover" to="/login">Login / Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
