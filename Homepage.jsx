import React, { Component } from 'react';
import Navbar from './Navbar';
import UpdateStatus from './UpdateStatus';
import './Homepage.css';
 class Homepage extends Component {
    render() {
        return (
            <div>
                 <Navbar />
                <div className="container-fluid">
                
                </div>
                <UpdateStatus />
            </div>
        )
    }
}
export default Homepage;
