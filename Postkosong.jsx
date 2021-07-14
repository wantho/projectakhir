import React, { Component } from 'react';
import Homepage from './Homepage';
import Hapus from '../images/icons8_delete.png';
import Gambar from '../images/icons8_image.png';
import './Postkosong.css';
 class Postkosong extends Component {
    render() {
        return (
            <div>
                
                <div className="container">
                    <div className="kotak2">
                        <h1 className="pos">Buat Post Baru <span> <img id="a12" src={Hapus} alt ="" /> </span></h1>
                        <hr />
                        <p className="ide">Apa yang ada dalam pikiranmu, Amri?</p>
                        <div className="kotak3">
                            <p className="gambar">Tambahkan Gambar <span> <img id="a13" src={Gambar} alt="" /></span></p>
                            <button type="button" class="btn btn-secondary">Post</button>
                        </div>

                    </div>
                </div>
                
            </div>
        )
    }
}
export default Postkosong;
