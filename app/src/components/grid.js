import React, { useEffect, useState } from "react";
import "./grid.css";
import html2canvas from 'html2canvas';


const save =()=>{

    html2canvas(document.getElementById('zon')).then(function (canvas) {
        // Convert canvas to image URL
        var imgURL = canvas.toDataURL('image/png');
        // Trigger download
        var a = document.createElement('a');
        a.href = imgURL;
        a.download = 'grid_image.png';
        a.click();


    });

}

const Grid = () => {
  const [link, setLink] = useState(null);
  const [num, setVal] = useState(1);

  const gridfunc = (x) => {
    setVal(x);
  };

  const setFile = (e)=>{

    // e.preventDefault();
    const z = e.target;
    let l = [];
    for (const child of e.target.children) {
      console.log(child);
      l.push(child);
    }
    
    if(l[0]){
    l[0].click();
    
    l[0].addEventListener("change",function(e){

        // alert(e.target.files[0]);
        const mkurl =  URL.createObjectURL(e.target.files[0]);
        l[1].src=mkurl;
        l[1].style.display="block";
        // l[1].style.height="100%";

    });
    z.style.border = "0px solid black";


}

  }

  return (
    <>
      <div className="head">
        <a className="home" href="./">
          home
        </a>
        <a className="down" onClick={save}>
          download
        </a>
      </div>

      <div className="menu">
        <div className="op" onClick={() => gridfunc(1)}>
          <div> + </div>
        </div>

        <div className="op" id="2" onClick={() => gridfunc(2)}>
          <div> + </div>
          <div> + </div>
        </div>

        <div className="hortwo op" id="3" onClick={() => gridfunc(3)}>
          <div> + </div>
          <div> + </div>
        </div>

        <div className="threeup op" id="4" onClick={() => gridfunc(4)}>
          <div> + </div>
          <div> + </div>
          <div> + </div>
        </div>

        <div className="threedown op" id="5" onClick={() => gridfunc(5)}>
          <div> + </div>
          <div> + </div>
          <div> + </div>
        </div>

        <div className="four op" id="6" onClick={() => gridfunc(6)}>
          <div> + </div>
          <div> + </div>
          <div> + </div>
          <div> + </div>
        </div>
      </div>

      <div className="menu grid-con" id="zon">
        {num === 1 ? (
          <div className="op">
            
            <div onClick={setFile}> 
            <input type="file" hidden/>
            <img src={""} />
                
             </div>
          </div>
        ) : num === 2 ? (
          <div className="op">

            <div onClick={setFile}> 
            
            <input type="file" hidden/>
            <img src={""} />
                  
            </div>

             <div onClick={setFile}> 
             
            <input type="file" hidden/>
            <img src={""} />
                  
                 
            </div>
          </div>
        ) : num === 3 ? (
          <div className="hortwo op">

             <div onClick={setFile}> 
             
            <input type="file" hidden/>
            <img src={""} />
              
             
             </div>
             <div onClick={setFile}> 
             
            <input type="file" hidden/>
            <img src={""} />
                  
                 
                 </div>
          </div>
        ) : num === 4 ? (
          <div className="threeup op">

            <div onClick={setFile}> 
            
            <input type="file" hidden/>
            <img src={""} />
                 
                  </div>

                  <div onClick={setFile}> 
                  
            <input type="file" hidden/>
            <img src={""} />
                  
                 </div>

                 <div onClick={setFile}> 
                 
            <input type="file" hidden/>
            <img src={""} />
                  
                 
                 </div>


          </div>
        ) : num === 5 ? (
          <div className="threedown op">

            <div onClick={setFile}> 
            
            <input type="file" hidden/>
            <img src={""} />
                 
                </div>

                <div onClick={setFile}> 
                
            <input type="file" hidden/>
            <img src={""} />
                  
                 </div>

                 <div onClick={setFile}> 
                 
            <input type="file" hidden/>
            <img src={""} />
                  
                 </div>

          </div>
        ) : (
          <div className="four op">

          <div onClick={setFile}> 
          
            <input type="file" hidden/>
            <img src={""} />
                 
                </div>

                <div onClick={setFile}> 
                
            <input type="file" hidden/>
            <img src={""} />
                 
                </div>

                <div onClick={setFile}> 
                
            <input type="file" hidden/>
            <img src={""} />
                  
                 </div>

                 <div onClick={setFile}> 
                 
            <input type="file" hidden/>
            <img src={""} />
                 
                
                </div>


          </div>
        )}
      </div>
    </>
  );
};

export default Grid;
