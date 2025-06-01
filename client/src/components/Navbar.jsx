import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('astroAuthToken');
    setUser(null);
    navigate("/");
  };

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
            {!user && (
              <li className="nav-item">
                <Link className="btn btn-outline-light login-hover" to="/login">
                  Login / Sign In
                </Link>
              </li>
            )}
            {user && (
              <>
                {/* Show user’s name and photo if available */}
                <li className="nav-item d-flex align-items-center">
                  {user.picture && (
                    <img
                      src={user.picture}
                      alt="Profile"
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        marginRight: "8px",
                        objectFit: "cover"
                      }}
                    />
                  )}
                  <span className="navbar-text text-white me-2">{user.name || user.email}</span>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-danger login-hover"
                    style={{ marginLeft: "10px" }}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
