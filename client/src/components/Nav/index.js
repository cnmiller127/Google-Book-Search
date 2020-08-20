import React, {useEffect, useContext} from "react";
import {NavContext} from "../../../src/UserContext";

function Nav() {
  
  const NavStat = () => {
    const contextVal = useContext(NavContext);
    return contextVal;
  
  }
    const navStatus = NavStat();
    console.log(navStatus)
  
    // Load all books and store them with setBooks
    useEffect( () => {
        
        
        }, [navStatus.status]);

  return (
  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">Library</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className = {`nav-item ${(navStatus.status === "home") ? "active" : ""}`} >
          <a className= "nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className= {`nav-item ${(navStatus.status === "lib") ? "active" : ""}`}>
          <a className="nav-link" href="/mylibrary">My Library</a>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Nav;
