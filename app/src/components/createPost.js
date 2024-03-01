import {useState} from 'react';
import Preview from './preview';
import './createPost.css';

const CreatePost = (props)=>{

    const{flag} = props;

    const[file,setFile] = useState(null);
    const[preview,setPreview] = useState(false);
    const[img,setImg] = useState(false);
    const[video,setVideo] = useState(false);
    const[ourl,setOurl] = useState("");

    const handleFile = (e)=>{
        setFile(e.target.files[0]);
        const mkurl =  URL.createObjectURL(e.target.files[0]);
        if(mkurl){
            setOurl(mkurl);
        }
        if(mkurl){
            setPreview(true);
        }
    }

    const addImg =()=>{
        setImg(true);
        setVideo(false);
        let inpImg = document.getElementById("inpImg");
        inpImg.click();
        
 
    }

    const addVid =()=>{
        setImg(false);
        setVideo(true);
        let inpImg = document.getElementById("inpImg");
        inpImg.click();
       
    }



    const handleSub = ()=>{

        if(file){
        setPreview(true);

    }else{

        alert("Please Select Image or Video!")

    }

    }

   


    return(
        <>
        {

            preview?   
            
            <Preview link={ourl} img={img?true:false} file={file} />
            
            
            :

            <div className="post-box">
            <div  method="post">

                <input type="text" name="text" className="inp-box" placeholder='' readOnly/>
                <p className='tag'>Post Your Images / Videos Here...</p>
                <input type="file" name="img" id="inpImg" onChange={handleFile} hidden />
                <input type="file" name="video" onChange={handleFile} id="inpVid" hidden/>
                
                <a style={flag==="both"?{visibility:"visible"}:flag==="img"?{visibility:"visible",marginLeft:"50px"}:{visibility:"hidden"}} className='img-btn  addImg' onClick={addImg}><i class="fa-regular fa-image"></i></a>
                <a  style={flag==="both"?{visibility:"visible"}:flag==="video"?{visibility:"visible",marginLeft:"0px"}:{visibility:"hidden"}}  className='vid-btn addImg' onClick={addVid}><i class="fa-solid fa-video"></i></a>

                <input type="button" onClick={handleSub} className="btn btn-success post-btn" value="post"/>


            </div>


        </div>

        }
       

        
        </>
    );



}

export default CreatePost;