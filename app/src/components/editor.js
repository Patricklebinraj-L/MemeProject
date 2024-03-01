import {useState} from 'react';
import './editor.css';
import html2canvas from 'html2canvas';


const Editor = ()=>{

    const[grid,setGrid] = useState(1);
    const[url,setUrl] = useState(null);
    const[txt1,setText1] = useState("Enter the text1");
    const[txt2,setText2] = useState("Enter the text2");

    var tex1 = document.getElementById("textone");
    var tex2 = document.getElementById("texttwo");


    const setFile = (e)=>{

        const mkurl =  URL.createObjectURL(e.target.files[0]);
        if(mkurl){
            setUrl(mkurl);
        }
    }

    setInterval(function(){

        let t1 = document.getElementById("textone").value;
        let t2 = document.getElementById("texttwo").value;

        if(t1!=""){
        setText1(t1);

        }
        if(t2!=""){

        setText2(t2);
        }

    },1000)




const save =()=>{

    html2canvas(document.getElementById('xon')).then(function (canvas) {
        // Convert canvas to image URL
        var imgURL = canvas.toDataURL('image/png');
        // Trigger download
        var a = document.createElement('a');
        a.href = imgURL;
        a.download = 'meme_template.png';
        a.click();


    });


}

setTimeout(function(){


        const draggableElements = document.querySelectorAll(".draggable");
        let activeDraggable = null;
        let initialX, initialY;
    
        draggableElements.forEach(draggable => {
            draggable.addEventListener("mousedown", startDragging);

        });
    
        function startDragging(e) {
            activeDraggable = e.target;
            activeDraggable.classList.add("active");
    
            initialX = e.clientX - activeDraggable.offsetLeft;
            initialY = e.clientY - activeDraggable.offsetTop;
    
            document.addEventListener("mousemove", dragElement);
            document.addEventListener("mouseup", stopDragging);
        }
    
        function dragElement(e) {
            if (activeDraggable) {
                const newX = e.clientX - initialX;
                const newY = e.clientY - initialY;
    
                activeDraggable.style.left = `${newX}px`;
                activeDraggable.style.top = `${newY}px`;
            }
        }
    
        function stopDragging() {
            if (activeDraggable) {
                activeDraggable.classList.remove("active");
                activeDraggable = null;
    
                document.removeEventListener("mousemove", dragElement);
                document.removeEventListener("mouseup", stopDragging);
            }
        }

    
       let tags  = document.querySelectorAll(".draggable");
       
       tags.forEach(a=>{
        a.addEventListener("click",function(){
            let fa = document.querySelectorAll(".focus");
            fa.forEach(b=>{
                b.classList.remove("focus");
            })
            console.log(fa);
            a.classList.add("focus");
        })
       })

       let ct = document.getElementById("memes");

       ct.addEventListener("click",function(event){

        let arr = document.querySelectorAll(".focus")[0];
        if(arr){

            let x,y;

            if(window.innerWidth<500){

                 x = event.clientX-200;
                 y = event.clientY;

            }
            else{

                 x = event.clientX-500;
                 y = event.clientY;

            }
               

                // arr.style.left = `${x}px`;
                // arr.style.top = `${y}px`;
                arr.style.top=y+"px";
                arr.style.left=x+"px";
                console.log(window.innerWidth);


            setTimeout(()=>{

                arr.classList.remove("focus");

            },10000)

  
        }


       })



},500)
       


const makeColor = (e)=>{
    let id = e.target.id;
    let val = e.target.value;
    let text;
    if(id=="clrtwo"){
    text = document.getElementById("txttwo");
    }
    else{
    text = document.getElementById("txtone");
    }
    text.style.color = val;
}


const makeBgColor = (e)=>{
    let id = e.target.id;
    let val = e.target.value;
    let text;
    if(id=="bgclrtwo"){
    text = document.getElementById("txttwo");
    }
    else{
    text = document.getElementById("txtone");
    }
    text.style.backgroundColor = val;
}


const makeBrColor = (e)=>{
    let id = e.target.id;
    let val = e.target.value;
    let text;
    if(id=="brclrtwo"){
    text = document.getElementById("txttwo");
    }
    else{
    text = document.getElementById("txtone");
    }
    text.style.border = "2px solid "+val;
}


    return(
        <>
        

        <div className="meme-con" id="con">
    <div className='edit'></div>
    <div id="xon">
        <div className='meme' id="memes">
            <div className='inp'> + </div>
            <img src={url} className="img"/>
        </div>
        <div class="draggable-container">
            <div class="draggable" id="txtone">{txt1}</div> <br></br><br></br>
            <div class="draggable" id="txttwo">{txt2}</div>
        </div>
    </div>
    <button className="btn btn-success" onClick={save}>download</button>
    <a className="home" href='./'>Home</a>

  <div className='setting'>

        <input type='file' name="file" onChange={setFile} className='file'/><br></br><br></br>
        <br></br>
        <input type='text' name="text"  className='text' id="textone" placeholder='Enter the text1'/> <br></br><br></br>
        
        <label >Color  : &nbsp;</label>
        <input type='color' id="clrone" name="clrone"  onChange={makeColor}/><br></br>


        <label >Background color  : &nbsp;</label>
        <input type='color' id="bgclrone" name="bgclrone" onChange={makeBgColor}/><br></br>


        <label >Border color  : &nbsp;</label>
        <input type='color' id="brclrone" name="brclrone" onChange={makeBrColor}/><br></br><br></br>

{/* ----------------------------------------------- */}


        <input type='text' name="text"  className='text' id="texttwo" placeholder='Enter the text2'/> <br></br>
        <br></br>


        <label >Color  : &nbsp;</label>
        <input type='color' id="clrtwo" name="clrtwo" onChange={makeColor}/><br></br>


        <label >Background color  : &nbsp;</label>
        <input type='color' id="bgclrtwo" name="bgclrtwo" onChange={makeBgColor}/><br></br>


        <label >Border color  : &nbsp;</label>
        <input type='color' id="brclrtwo" name="brclrtwo"  onChange={makeBrColor}/><br></br><br></br>


  </div>




</div>

       
        
        </>
    );


}

export default Editor;