//type rfc for sort
import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <>
      {/* Bootstrap Navbar */}
      <nav
        className={`navbar navbar-expand-lg navbar-${props.themeMode} bg-${props.themeMode}`}
      >
        <div className="container-fluid">
          {/* to load page without reloading the entire website */}
          <a className="navbar-brand" href="/">
            {/* creating property paremeter  */}
            {props.title}
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                onClick={props.toggleTheme}
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check-label text-${props.textColor}`}
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Theme
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

//security messure to check and pass property time
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  themeMode: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
