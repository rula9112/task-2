import React from "react";
import {Nav, NavDropdown} from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
const MyNavbar = ()=>{
    return(
     


<Navbar collapseOnSelect expand="lg"  className="bg-grey">
  
  <Navbar.Brand href="#home"><Link to="">PHONO</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#" className="navlink">
<Link to="">Home</Link>
</Nav.Link>
<Nav.Link href="#" className="navlink">
<Link to="/page1" >Page1</Link>
</Nav.Link>
<Nav.Link href="#" className="navlink">
<Link to="/page2" className="navlink">Page2</Link>
</Nav.Link>
      <NavDropdown title="Collection" id="collection">
        
        <NavDropdown.Item href="#">
          Some Links
        </NavDropdown.Item>
        <NavDropdown.Item href="#">
          Some Links
        </NavDropdown.Item>
        <NavDropdown.Item href="#">
          Some Links
        </NavDropdown.Item>
        
      </NavDropdown>
      <Nav.Link href="#pricing">shope</Nav.Link>
      <Nav.Link href="#cuLove">Android</Nav.Link>
      <Nav.Link href="#Home">Accessories</Nav.Link>
      <Nav.Link href="#Home">Memory & Sotrage</Nav.Link>
      <NavDropdown title="Pages" id="pages">
        <NavDropdown.Item href="#">
          Some Links
        </NavDropdown.Item>
        <NavDropdown.Item href="#">
          Some Links
        </NavDropdown.Item>
        <NavDropdown.Item href="#">
          Some Links
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#about"><i className="fa fa-user"></i></Nav.Link>
      <Nav.Link href="#exploreFood"><i className="fa fa-bascste"></i> </Nav.Link>
      <NavDropdown title="Languages" id="languages">
        <NavDropdown.Item href="#">
          Some Links
        </NavDropdown.Item>
        <NavDropdown.Item href="#">
          Some Links
        </NavDropdown.Item>
        <NavDropdown.Item href="#">
          Some Links
        </NavDropdown.Item>
      </NavDropdown>
      <Nav>
      </Nav>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
}

export default MyNavbar;