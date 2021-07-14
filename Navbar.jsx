import React, { Component } from 'react';
import skyduImages from "../images/skydu-symbol.svg";
import bell from "../images/icons8_bell.svg";
import user1 from "../images/Group92.svg";
import './Navbar.css';

 class Navbar extends Component {
    render() {
        return (
            <div>
                
                    <nav className="navbar">
                        <a className="navbar-brand" href="#">
                            <img id="a" src={skyduImages} width="30" height="30" className="d-inline-block align-top" alt=""/>
                            <img id="b" src={bell} width="30" height="30" className="d-inline-block align-top" alt=""/> 
                            <img id="c" src={user1} width="30" height="30" className="d-inline-block align-top" alt=""/>
                        </a>
                    </nav>

                     
                
            </div>
        )
    }
}

export default Navbar;
