import React, {useEffect, useContext, useState} from "react";
import {NavContext} from "../../../src/UserContext";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {   Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText, } from 'reactstrap';

function NavExp() {
  
  const NavStat = () => {
    const contextVal = useContext(NavContext);
    return contextVal;
  
  }
    const navStatus = NavStat();
    console.log(navStatus)
  
    // Load all books and store them with setBooks
    useEffect( () => {
        
        
        }, [navStatus.status]);

  const [isOpen, setIsOpen] = useState(false);      
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    <Navbar color="light" light expand="md">
    <NavbarBrand href="/">VIRTUAL LIBRARY</NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" navbar>
        <NavItem className = {`${(navStatus.status === "home") ? "active" : ""}`}>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className= {`${(navStatus.status === "lib") ? "active" : ""}`} href="/mylibrary">My Library</NavLink>
        </NavItem>
      </Nav>
      <NavbarText>📕</NavbarText>
    </Collapse>
  </Navbar>
</div>
    );
}


  

  


export default NavExp;


  //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //   <a className="navbar-brand" href="/">Library</a>
  //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  //     <span className="navbar-toggler-icon"></span>
  //   </button>
  //   <div className="collapse navbar-collapse" id="navbarNav">
  //     <ul className="navbar-nav">
  //       <li className = {`nav-item ${(navStatus.status === "home") ? "active" : ""}`} >
  //         <a className= "nav-link" href="/">Home <span className="sr-only">(current)</span></a>
  //       </li>
  //       <li className= {`nav-item ${(navStatus.status === "lib") ? "active" : ""}`}>
  //         <a className="nav-link" href="/mylibrary">My Library</a>
  //       </li>
  //     </ul>
  //   </div>
  // </nav>