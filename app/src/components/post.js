import React, { useEffect, useState } from "react";
import './post.css';
import CreatePost from "./createPost";
import config from "../config/config";


const Posts = (props)=>{

    const{video,id} = props;


    const[list,setList] = useState([0]);
    const[loader,setLoader] = useState(true);



    const makeLike = (e)=>{

        let id = e.target.id;
        let fd = new FormData();
        let ls = localStorage.getItem("name");
        if(ls==null || ls==""){
            alert("Please signup!");
        }
        else{
        fd.append('name',ls);
        fd.append('id',id);

        // http://patrickweb.42web.io/backend/like.php
        // http://localhost/socio/backend/like.php

        fetch(`${config.apiUrl}/backend/like.php`,
        {
            method:"POST",
            body:fd
        }
        )
        .then(response => response.text())
        .then(d => {
            
            
            if (d) {
            
                setList(prevList => {
                    const updatedList = prevList.map(post => {
                        if (post.id === id) {
                          
                            if(d!=="false"){
                            post.count = d;
                            }
                        }
                        return post;
                    });
                    return updatedList;
                });
            }


        });

    }

    }


    const showComment = (e)=>{


        let parent = e.target.parentElement.parentElement.parentElement;
        let l = [];
        for(let child of parent.children){
            l.push(child);
        }
        let cb = l[3];
        console.log(l);
        cb.style.display = "block";
        l[2].children[2].style.display = "none";
        l[2].children[3].style.display = "block";

        

    }

    const hideComment = (e)=>{


        let parent = e.target.parentElement.parentElement.parentElement;
        let l = [];
        for(let child of parent.children){
            l.push(child);
        }
        let cb = l[3];
        console.log(l);
        cb.style.display = "none";
        l[2].children[2].style.display = "block";
        l[2].children[3].style.display = "none";


        

    }




    const makeComment = (e) => {
        let id = e.target.id;
        let p = e.target.parentElement;
        let l = [];
        for (let child of p.children) {
            l.push(child);
        }
        let val = l[0].value;
    
        let fd = new FormData();
        let ls = localStorage.getItem("name");
        if (ls == null || ls == "") {
            alert("Please signup!");
        } else if (val == "") {
           
            alert("Please write a comment!");
            
        } else {
            fd.append('name', ls);
            fd.append('id', id);
            fd.append('comment', val);

            // http://localhost/socio/backend/comment.php
    
            fetch(`${config.apiUrl}/backend/comment.php`, {
                method: "POST",
                body: fd
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(d => {
                    if (d) {
                        setList(prevList => {
                            const updatedList = prevList.map(post => {
                                if (post.id === id) {
                                    post.comments = d;
                                }
                                return post;
                            });
                            return updatedList;
                        });
                    } else {
                        console.log("Empty or unexpected response from the server:", d, id);
                    }
                })
                .catch(error => {
                    console.error("Fetch error:");
                });
            }
            
            
        }




    const makeld = (id)=>{


        let fd = new FormData();
            fd.append('name', "");
        fd.append('id', id);
        fd.append('comment', "");

        // http://patrickweb.42web.io/backend/comment.php
        // http://localhost/socio/backend/comment.php

        fetch(`${config.apiUrl}/backend/comment.php`, {
            method: "POST",
            body: fd
        })
        .then(response => response.json())
        .then(d => {
            if (d) {
               
                console.log(d);
                setList(prevList => {
                    const updatedList = prevList.map(post => {
                        if (post.id === id) {
                           
                                post.comments = d;
                            
                            
                        }
                        return post;
                    });
                    return updatedList;
                });
            } else {
                console.log(d + id);
            }
        });
        

    }


    


    useEffect(()=>{

        //  http://localhost/socio/backend/one.php?id=
        // http://patrickweb.42web.io/backend/one.php?id=
       
        if(id){
            fetch(`${config.apiUrl}/backend/one.php?id=`+id,
            {
                method:"GET"
            }
            )
            .then(response => response.json())
            .then(d => {
                let ln = d.length;
                if(ln>0){
                d[0]['img'] = "../"+d[0]['img'];
                setList(d);
                console.log(d);
                }
            
            });


        setTimeout(function(){

            setLoader(false);

            
        },3000)


        }

         //  http://localhost/socio/backend/allfiles.php
        //   http://patrickweb.42web.io/backend/allfiles.php

        else{
        fetch(`${config.apiUrl}/backend/allfiles.php`,
            {
                method:"GET"
            }
            )
            .then(response => response.json())
            .then(d => {
                let ln = d.length;
                if(ln>0){
                    
                setList(d);
                console.log(d);

                }
            
            });


        setTimeout(function(){

            setLoader(false);
            console.log(list);
            
        },3000)


    }

    },[])


    return(
        <>
        <div className="post-con">

            <CreatePost flag={video==="both"?"both":video?"video":"img"}/>
        
        {list.map((e)=>{

            return (

                video==="both"?

                <div className="post">
    
                    <div className="tg">
                    <p>{e.name?e.name:"user"}</p>
                    </div>
                    
                    <div className="cont"
                    
                    style={loader?{visibility:"hidden"}:{visibility:"visible"}}
    
                    >
                       
                       {e.type==="img"?
                       
                       <img src={e.img} className="img" />
    
                       :e.type==="video"?
                         
                        <video controls width="100%" className="img" src={e.img}>
    
                        <source  type="video/mp4" />
                        
                      </video>:
                      <center>
                         <h5 className="nd"> No data found! </h5>
                      </center>
                     
    
                       }
    
    
       
                        
                    </div>
    
                    <div className="cont-bar">
                        <span onClick={makeLike} id={e.id}><i class="fa-regular fa-thumbs-up"></i> {e.count} </span>
                       <a href={e.img} download={true}> <span><i class="fa-solid fa-download"></i></span></a>
                    
                    <a className="comment-btn comment-open" onClick={showComment} ><span>comments-open</span></a>
                    <a className="comment-btn comment-close"onClick={hideComment} ><span>comments-close</span></a>
                    
                    <a href={"/post/"+e.id}> <span> <i class="fa-solid fa-share"></i> </span> </a>
                    </div>
                    <div className="comment-box">

                       <div>

                       
                        {e.comments && e.comments.length > 0 ? (
                            e.comments.map((a)=>(<>
                            <text>{Object.keys(a).map((b,c)=>( b ))}</text>
                            <text1>{Object.keys(a).map((b,c)=>( " : "+a[b] ))}</text1><br></br><br></br>
                            
                           </> )
                            
                            )
                          
                        ) : (
                            <p>No comments yet.</p>
                        )}
                       


                       </div>
                       <div>


                       <input type="text" id="comment" name="comment" placeholder="your comments write here!.." />

                       <button className="btn btn-success send" id={e.id} onClick={makeComment}> send </button>
                       </div>

                       <span className="rl" onClick={()=>makeld(e.id)}> ( ) </span>
                    </div>
                    
    
                    <center> <div className="spin-loader" 
                    
                    style={loader?{visibility:"visible"}:{visibility:"hidden"}}
    
                    >
                         <span> <i class="fa-solid fa-spinner"></i> </span>  </div> </center>
    
    
                </div>

                :

                video===false?
            
            e.type==="video"?<></>:

            <div className="post">

            <div className="tg">
            <p>{e.name?e.name:"new user"}</p>
            </div>
            
            <div className="cont"
            
            style={loader?{visibility:"hidden"}:{visibility:"visible"}}

            >
               
                {e.img? 
               <img src={e.img} className="img" />:

               <center>
               <h5 className="nd"> No data found! </h5>
            </center>
                }

                
            </div>

            <div className="cont-bar">
                        <span onClick={makeLike} id={e.id}><i class="fa-regular fa-thumbs-up"></i> {e.count} </span>
                       <a href={e.img} download={true}> <span><i class="fa-solid fa-download"></i></span></a>
                    
                    <a className="comment-btn comment-open" onClick={showComment} ><span>comments-open</span></a>
                    <a className="comment-btn comment-close"onClick={hideComment} ><span>comments-close</span></a>
                    
                    <a href={"/post/"+e.id}> <span> <i class="fa-solid fa-share"></i> </span> </a>
                    </div>
                    <div className="comment-box">

                    <div>


                    {e.comments && e.comments.length > 0 ? (
                        e.comments.map((a)=>(<>
                        <text>{Object.keys(a).map((b,c)=>( b ))}</text>
                        <text1>{Object.keys(a).map((b,c)=>( " : "+a[b] ))}</text1><br></br><br></br>
                        
                        </> )
                        
                        )
                    
                    ) : (
                        <p>No comments yet.</p>
                    )}



                    </div>
                    <div>


                    <input type="text" id="comment" name="comment" placeholder="your comments write here!.." />

                    <button className="btn btn-success send" id={e.id} onClick={makeComment}> send </button>
                    </div>

                    <span className="rl" onClick={()=>makeld(e.id)}> ( ) </span>
                    </div>

                                <center> <div className="spin-loader" 
                                
                                style={loader?{visibility:"visible"}:{visibility:"hidden"}}

                                >
                                    <span> ( ) </span>  </div> </center>


                            </div>

            
                :

            video?
            
            e.type==="img"?<></>:

            <div className="post">

            <div className="tg">
            <p>{e.name?e.name:"new user"}</p>
            </div>
            
            <div className="cont"
            
            style={loader?{visibility:"hidden"}:{visibility:"visible"}}

            >
               
                 {e.img?

                 <video controls width="100%" className="img" src={e.img}>

                <source  type="video/mp4" />
                
                 </video>: 
              
                <center>
                         <h5 className="nd"> No data found! </h5>
                </center>

                 }

                
            </div>

            <div className="cont-bar">
                        <span onClick={makeLike} id={e.id}><i class="fa-regular fa-thumbs-up"></i> {e.count} </span>
                       <a href={e.img} download={true}> <span><i class="fa-solid fa-download"></i></span></a>
                    
                    <a className="comment-btn comment-open" onClick={showComment} ><span>comments-open</span></a>
                    <a className="comment-btn comment-close"onClick={hideComment} ><span>comments-close</span></a>
                    
                    <a href={"/post/"+e.id}> <span> <i class="fa-solid fa-share"></i> </span> </a>
                    </div>
                    <div className="comment-box">

                    <div>


                    {e.comments && e.comments.length > 0 ? (
                        e.comments.map((a)=>(<>
                        <text>{Object.keys(a).map((b,c)=>( b ))}</text>
                        <text1>{Object.keys(a).map((b,c)=>( " : "+a[b] ))}</text1><br></br><br></br>
                        
                        </> )
                        
                        )
                    
                    ) : (
                        <p>No comments yet.</p>
                    )}



                    </div>
                    <div>


                    <input type="text" id="comment" name="comment" placeholder="your comments write here!.." />

                    <button className="btn btn-success send" id={e.id} onClick={makeComment}> send </button>
                    </div>

                    <span className="rl" onClick={()=>makeld(e.id)}> ( ) </span>
                    </div>

                                <center> <div className="spin-loader" 
                                
                                style={loader?{visibility:"visible"}:{visibility:"hidden"}}

                                >
                                    <span> ( ) </span>  </div> </center>


                            </div>

            
           
            :

        <></>
            
            )
        })}

        </div>

        </>
    );


}

export default Posts;