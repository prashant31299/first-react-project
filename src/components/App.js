import react from "react";
import './style.css'
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

function  App(){
    return (
        <div className="Main--component"> 
        <Header/>
        <Main/>
        <Footer/>
        </div>
    )
}

export default App