import react from "react";
import imgage from "./images/rectange.svg"
import { FaLinkedinIn,FaGithub } from 'react-icons/fa';


function Header(){
    return (
        <div className="Header--container">
        <img src={imgage}  />
        <div className="Header-main">
            <h1 className="main-h1"> Laura Smith</h1>
            <h5>Frontend Devloper</h5>
            <p>laurasmith.website</p>

            <div className="btn">
            <button><FaLinkedinIn/><span>Linkdln</span>  </button>
            <button><FaGithub/><span>Github</span></button>
            </div>
        </div>
        </div> 
    )
}
export default Header