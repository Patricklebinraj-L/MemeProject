import { useState } from "react";
import "./preview.css";
import config from "../config/config";

const Preview = (props)=>{

    const{link,img,file} = props;
    console.log(file);

    const headerpostfunc = async(e)=>{
        e.preventDefault();
        const fd = new FormData();
        fd.append("file",file);
        fd.append("name",localStorage.getItem("name"));
        let date = new Date();
        let dt = parseInt(date.getDate()).toString();
        let mt = parseInt(date.getMonth()).toString();
        let yr = parseInt(date.getFullYear()).toString();
        let fn = dt+mt+yr;
        fd.append("filename",fn);
        if(img){
            fd.append("format","img");
        }
        else{
            fd.append("format","video");
        }
        let name = localStorage.getItem("name");
        if((name==null) || (name=="")){
            alert("please sign up!,try again")
        }

        //  http://localhost/socio/backend/addImg.php
        //  http://patrickweb.42web.io/backend/addImg.php
        //  http://127.0.0.1:5000/upload

        else{

            console.log(config.apiUrl)
            
            fetch(`${config.apiUrl}/backend/addImg.php`, // 
                       {method:"POST",
                       body:fd
                       })
                       .then((response) => response.json())
                       .then((d)=>{

                        if(d.success){
                        alert("Successfully uploaded!");
                        window.location.reload();
                        }
                        else{
                            alert(d.error);
                        }
                        
                        
                       })
                        .catch(e=>console.log(e));


            //  window.location.reload();

                    }
    }

    return(
        <>
        
        <center>

<div className= 'preview-box' id="headerPreview" >

    <div className="preview-file">

    {img?

<img src={link} className='preview-img' />

:

<video controls width="100%" className="img">

<source src={link} type="video/mp4" />

 </video>

}



    </div>

    <div className="preview-content">
        <center>

        <h1>Preview</h1>
        <p>you are selected this file to upload !</p><br/><br/>

    <button className='btn btn-success'

style={{marginLeft:"30px",backgroundColor:'gray'}}
onClick={(e)=>{
e.preventDefault();
window.location.reload();
}}
>Cancel</button> 

<button className='btn btn-success' id="subbtn"
onClick={headerpostfunc}
>Post</button> 

</center>

    </div>

       

    
    

</div>

</center>
        

        

        
        
        
        </>
    );


}

export default Preview;