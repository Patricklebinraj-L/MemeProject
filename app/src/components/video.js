import { useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";
import Posts from "./post";
import "../pages/newLogin.css";

const Videos = ()=>{




    return(
        <div id="home" >

        <Header/>
        <Menu/>
        <Posts video={true}/>
        <Footer/>

        </div>
    );


}

export default Videos;