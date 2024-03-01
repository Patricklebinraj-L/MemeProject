import { useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Menu from "../components/menu";
import Posts from "../components/post";
import "./newLogin.css";

const Home = ()=>{




    return(
        <div id="home" >

        <Header/>
        <Menu/>
        <Posts video="both"/>
        <Footer/>

        </div>
    );


}

export default Home;