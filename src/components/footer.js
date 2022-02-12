
import React, { Component } from 'react';
import { FaLinkedinIn,FaGithub } from 'react-icons/fa';
import {  BsTwitter,BsFacebook } from "react-icons/bs";
function Footer(){
    return (
        <div className='footer--container'>

    
        <FaLinkedinIn />
      <FaGithub />
      <BsFacebook />
      <BsTwitter />

        </div>
    )
}
export default Footer