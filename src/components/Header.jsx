import React from "react";
import { Link } from "react-router-dom";
import countries from "./countries";
import "./Header.css";

function Header() {
  const category = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
    "politics",
  ];

  return (
    <header>
      {/* Main navigation bar */}
      <nav className="navbar">
        <h3>
          News Aggregator
        </h3>
        <div className="nav-ul">
          <div className="dropdown-container">
            <div className="nav-link-with-dropdown">
              <Link className="nav-link" to="#">
                Country
              </Link>
              <div className="dropdown-content">
                {countries.map((element, index) => (
                  <div key={index} className="dropdown-item">
                    <Link
                      to={"/country/" + element?.iso_2_alpha}
                      className="nav-link country-link"
                    >
                      <img
                        src={element?.png}
                        srcSet={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png 2x`}
                        alt={element?.countryName}
                      />
                      <span>{element?.countryName}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sub-navigation bar for categories and "All News" */}
      <nav className="sub-navbar">
        <Link to="/" className="nav-link capitalize">
          All News
        </Link>
        {category.map((element, index) => (
          <Link
            key={index}
            to={"/top-headlines/" + element}
            className="nav-link capitalize"
          >
            {element}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
