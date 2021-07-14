import React, { Component } from 'react';
import Navbar from './Navbar';
import Gambar2 from '../images/gbrprofile.png';
import Follow from '../images/following.png';
import Logo1 from "../images/Group90.png";
import Edit from '../images/edit.png';
import Trash from '../images/trash.png';
import Titik from '../images/Group50.png';
import Komentar from '../images/Komentar.png';
import Like from '../images/Like.png';
import Share from '../images/Share.png';
import Foto1 from '../images/Rectangle43.png';
import './Navbar.css';
import './Profile.css';

 class Profile extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="body">
                    <img id="a14" src ={Gambar2} />
                    <h4 className="person">Peter Parker <span id="a15">Edit profile</span> <img id="a16" src={Follow} /></h4> 
                    <h5 className="posting">364 <span id="a17">posts</span> </h5> 
                    <h5 className="pengikut">16k <span id="a18">followers</span></h5>
                    <h5 className="mengikuti">16 <span id="a19">following</span></h5>
                    <p className="kepribadian">Kadang mengganggu jika digigit. </p>
                    <div className="boxa">
                         <p className="text1a">What’s on you mind, Thomas ? <span><img id="d" src={Logo1} /></span></p>
                    </div>
                    <div className="boxb">
                          <img id="a20" src ={Gambar2} />
                          <h4 className="profile1">Peter Parker <span> <img id="a21" src={Titik} /></span> </h4>
                          <h5 className="waktu">45 mins ago</h5>
                          <img id="a22" src={Edit}  /> <span id="a23">Edit Post</span>
                          <img id="a24" src={Trash} /> <span id="a25">Delete Post</span>
                        <p className="p1">Being a father is sometimes my hardest but always my most rewarding job. Happy Father’s Day to all dads out there. </p>
                        <img id="a26" src={Like} alt="" />
                        <img id="a27" src={Komentar} alt="" />
                        <img id="a28" src={Share} alt="" />
                    </div>
                    <div className="boxc">
                         <img id="a29" src ={Gambar2} />
                          <h4 className="profile1a">Peter Parker <span> <img id="a30" src={Titik} /></span> </h4>
                          <h5 className="waktu2">June 21, 12:45 pm</h5>
                        <p className="p2">
                        Having fun while cooking and eating variety of foods with <span id="warna">@Sarah</span>
                        </p>
                        <img id="a31" src={Foto1} />
                    </div>
                </div>
                

            </div>
        )
    }
}
export default Profile;
