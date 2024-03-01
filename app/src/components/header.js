import { useState } from 'react';
import Preview from './preview';
import './header.css';

const Header = ()=>{

   

    const[name,setName] = useState("new user");
    const[file,setFile] = useState(null);
    const[preview,setPreview] = useState(false);
    const[ourl,setOurl] = useState("");
    const[img,setImg] = useState(false);

    setInterval(function(){
        let ls = localStorage.getItem('name');
        if(ls){
            setName(ls);
        }
    },1000)


    const handleSelect =(e)=>{

        let v = e.target.value;
        if(v==="img"){

            setImg(true);
            let hf = document.getElementById("headerFile");
            hf.click();
            e.target.value = "+";

        }
        else{

            setImg(false);
            let hf = document.getElementById("headerFile");
            hf.click();
            e.target.value = "+";
        }



    }


    const headerHandleFile = (e)=>{
        
        e.preventDefault();

        setFile(e.target.files[0]);
        
        const mkurl =  URL.createObjectURL(e.target.files[0]);
        if(mkurl){
            setOurl(mkurl);
        }
        if(mkurl){
            setPreview(true);
        }

        setPreview(true);
      
    }



   



return(


<div className='header'>
    <div className='opt '>
     <span> <a className='tit'> Focio</a> </span>
     <span>  <a> </a>  </span>
     <span>  <a> </a>  </span>
     <span className="prof"> <a href="/login"> <text id="name"> {name} </text> <i class="fa-solid fa-user"></i></a> </span>
     </div>

     <div className='opt lnk' id="header">
     <a href='/'>  <i class="fa-solid fa-address-card"></i> </a> 
     <a href='/editor'>  <i class="fa-solid fa-wand-magic-sparkles"></i> </a> 
     <a href='/grid'>   <i class="fa-solid fa-border-all"></i> </a> 
     {/* <span  className='plus'>
        
        <select onChange={handleSelect}> 
        <option hidden>+</option>
        <option id="addImg" className='addImg' value="img">Image</option>
        <option id="addVideo" className='addVid' value="video">Video</option>
        </select>
        
        </span> */}
     <a href='/pics'>  <i class="fa-solid fa-photo-film"></i> </a>
     <a href='/videos'> <i class="fa-brands fa-youtube"></i> </a>
     </div>


     <input type="file" name="" id="headerFile" onChange={headerHandleFile} hidden />


     {

preview?   

<Preview link={ourl} img={img?true:false} file={file}  />

:<></>

}     

 </div>






);

}

export default Header;