import { useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";
import Posts from "./post";
import "../pages/newLogin.css";
import { useParams } from "react-router-dom";

const Content = ()=>{


    const {id} = useParams();



    return(
        <div id="home" >

        <Header/>
        <Menu/>
        <Posts video="both" id={id?id:null}/>
        <Footer/>

        </div>
    );


}

export default Content;