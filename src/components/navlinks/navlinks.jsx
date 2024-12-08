import { ErrorImg } from "../../utils/ErrorImageHelper";
import "./header.css";
import { Link } from "react-router-dom";
const logo = import.meta.env.VITE_APP_LOGO;

const NavLink = ({ showStrip }) => {
  return (
    <div>
      <nav
        className={`navbar custom-navbar navbar-expand-lg bg-body-tertiary ${
          showStrip ? "" : "fixed-top"
        }`}
      >
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            onError={ErrorImg}

            className="logo-img"
            style={{ height: "40px", width: "auto", marginRight: "8px" }}
          />
          
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarOffcanvasLg"
          aria-controls="navbarOffcanvasLg"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="navbarOffcanvasLg"
          aria-labelledby="navbarOffcanvasLgLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="navbarOffcanvasLgLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav d-flex justify-content-end flex-grow-1 pe-3">
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>

              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                  href="https://developnators.com/trainings"
                >
                  Training
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavLink;
