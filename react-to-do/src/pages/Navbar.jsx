import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";


function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <nav className={darkMode ? `navbar navbar-expand-lg bg-dark` : `navbar navbar-expand-lg bg-light`}>
      <div className="container-fluid">
        <a className={darkMode ? `navbar-brand text-white` : `navbar-brand`} href="#">
          ToDo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className={darkMode ? `nav-link active text-white` : `nav-link active text-dark`} aria-current="page" href="#">
                Option 1
              </a>
            </li>
            <li className="nav-item">
                <a className={darkMode ? `nav-link active text-white` : `nav-link active text-dark`} aria-current="page" href="#">
                Option 2
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Looking for something?"
              aria-label="Search"
            />
            </form>
            <button className={darkMode ? `btn btn-outline-light me-2` : `btn btn-outline-dark me-2`} type="submit">
            <i className="bi bi-search"></i>
            </button>
            <button className={darkMode ? `btn btn-dark me-2 btn-outline-light` : `btn btn-light me-2 btn-outline-dark`} onClick={toggleDarkMode}>
              <i className="bi bi-lightbulb text-warning"></i>
            </button>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
