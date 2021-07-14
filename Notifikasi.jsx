import React, { Component } from 'react';
import Navbar from './Navbar';
import './Navbar.css';
import './Notifikasi.css';
 import User7 from '../images/Group94.png';
 import User8 from '../images/Group95.png';
import User9 from '../images/Group96.png';
 import User10 from '../images/Group97.png';
 class Notifikasi extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div className="container-fluid">
                    <div className="kotak">
                        <img id="a1" src={User7} alt="" /><h4 className="nama1">Cierra Vega <span id="a2">likes your post.1d</span> </h4>  
                        <hr id="a3" />
                        <img id="a4" src={User8} alt="" /><h4 className="nama2">Alden Cantrell <span id="a5">commented on your post. 6d</span></h4>  
                        <hr id="a6" />
                        <img id="a7" src={User9} alt=""/><h4 className="nama3">Kierra Gentry <span id="a8">follows you. 7d </span></h4>  
                        <hr id="a9" />
                        <img id="a10" src={User10} alt=""/><h4 className="nama4">Bradyn Kramer <span id="a11">commented on your post. 7d </span></h4>  
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Notifikasi;
