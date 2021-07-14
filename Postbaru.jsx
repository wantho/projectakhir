import React, { Component } from 'react';
import Postkosong from './Postkosong';
import Hapus from '../images/icons8_delete.png';
import Gambar1 from '../images/image1.png';
import './Postbaru.css';


 class Postbaru extends Component {
        render() {
        return (
            <div>
             <div className="container">
                    <div className="kotak2">
                        <h1 className="pos">Buat Post Baru <span> <img id="a12" src={Hapus} alt ="" /> </span></h1>
                        <hr />
                        <p className="ide1">Setiap saat, badai selalu hadir menerpa, walau pikiranku selalu dipenuhi, kebohongan. Namun semua, membuatku sangat suka, pada semua beban berat yang kurasakan.</p>
                       
                            <img id="a13" src={Gambar1} alt="" />
                            <button type="button" class="btn btn-primary">Post</button>
                       

                    </div>
                </div>
                                  
            </div>
        )
    }
}
export default Postbaru;
