import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';



class Navigation extends Component {
    render() {
        return (
            <div>
              <Navbar>
      
        <Navbar.Brand href="#home">Stonks: The Dashboard for Stocks</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Apex</a>
          </Navbar.Text>
        </Navbar.Collapse>
      
    </Navbar>
            </div>
        );
    }
}

export default Navigation;