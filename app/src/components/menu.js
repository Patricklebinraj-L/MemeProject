import './menu.css';

const Menu = ()=>{


    const slideForward = ()=>{
        var menu = document.getElementById("menu");
        if(menu){
            menu.style.left="2%";
        }
    }

    const slideBack = ()=>{
        var menu = document.getElementById("menu");
        if(menu){
            menu.style.left="-150%";
        }
    }


    return(
        <>

        <h1 id="menuBtn" onClick={slideForward}> <i class="fa-solid fa-bars"></i> </h1>
        
        <div className="menu-bar-con" id="menu">
            <h3>Navigate </h3>
            <h2 id="cancel" onClick={slideBack}>x</h2>
            <div className="menu-opt">
                <a href="/">Home</a>
                <a href="/grid">Photo Grid</a>
                <a href="/editor">Meme Editor</a>
                <a href="/pics">Images</a>
                <a href="/videos">Videos</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                
            </div>

        </div>

        </>
    );


}


export default Menu;