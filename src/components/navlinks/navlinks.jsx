import "./header.css";
import { Link } from "react-router-dom";
const NavLink = ({showStrip}) => {
  return (
    <div  >
      <nav className={`navbar custom-navbar navbar-expand-lg bg-body-tertiary  ${showStrip ? '' : 'fixed-top' } `}>
        <Link to ="/" style={{color:'white'}} className="navbar-brand " >
          JobHunting  <a >  <span style={{color:'#FC8018'}}>  By Developnators </span> </a>
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
            <ul className="navbar-nav d-flex justify-content-center flex-grow-1 pe-3 ">
              <li className="nav-item"   data-bs-dismiss="offcanvas">
                <Link to ="/" className="nav-link" > Home </Link>
                  
               
              </li>
              
              <li className="nav-item"  data-bs-dismiss="offcanvas">
                <Link to= "/about" className="nav-link" href="#">
                  About
                </Link>
              </li>

              <li className="nav-item"  data-bs-dismiss="offcanvas">
                {/* <a className="nav-link" href="#">
                  Jobs
                </a> */}
              </li>
              <li className="nav-item"  data-bs-dismiss="offcanvas">
                <Link to= "contact" className="nav-link" href="#">
                  Contact
                </Link>

              </li>
              <li className="nav-item">
                <a  target="_blank" className="nav-link" href="https://developnators.com/trainings">
                  Training
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Adjust this section to fit within the navbar */}
       
      </nav>
    </div>
  );
};

export default NavLink;
