import { useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";
import Posts from "./post";
import "../pages/newLogin.css";

const Pics = ()=>{




    return(
        <div id="home" >

        <Header/>
        <Menu/>
        <Posts video={false}/>
        <Footer/>

        </div>
    );


}

export default Pics;