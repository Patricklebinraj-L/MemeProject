import React,{useState} from 'react';
import './newLogin.css';
import config from '../config/config';

const Login=()=>{ 

    const[flag,setFlag] = useState(0);


//--------------------------------


const[log,setLog] = useState({name:'',pass:''});
const[res,setRes] = useState(null);

const handleChange =(e)=>{
    let l = log;
    l[e.target.name]=e.target.value;

    setLog(l);
}

const handleSubmit=(event)=>{
    let r = "";
    event.preventDefault();
    let formdata = new FormData();
    Object.keys(log).map((key, index) => (
        formdata.append(key,log[key])
    ));


            //  http://localhost/socio/backend/login.php
            //  http://patrickweb.42web.io/backend/login.php


    fetch(`${config.apiUrl}/backend/login.php`,
    {method:"POST",
    body:formdata
    })
    .then(res=>res.json())
    .then(res=>{
        if(res.success){
            localStorage.setItem('name',log['name'])
            let ecr = btoa(log['name'])
            localStorage.setItem('focio_token',ecr)
            alert("Login successful !")
            window.location = "./";
        }
        else{
            alert(res.error)
        }
        console.log(res);
    })
    

}





	return(

        <>

        <div className='sheet'></div>

	<div className='container'>
		
      


            <div className='con2'>

            <center>

            <h1>Welcome To Focio</h1>

            <p>
                Welcome to Focio!, Please log in to access your account
                and manage your account,If you don't have account yet, You can register below
            </p>


            </center>
            </div>



            <div   style={flag===1?{visibility:"hidden"}:{visibility:"visible"}} className='con'> 
        <h2 id="log-tit">Login</h2>
			<div className='fld'> 
				<label htmlFor="email">User Id or Email</label>
				<input type="text" name="name" id="name"  onChange={handleChange}  placeholder='user id'   autoComplete='off'/> 
               
            </div> 
			<div className='fld' style={{marginTop:"10px"}}> 
				<label htmlFor="passw">Password</label>
			<input type="text" name="pass" id="pass" onChange={handleChange}  placeholder='password'   autoComplete='off'/> 
			
            </div>  

            <center> 
        
        <a href='./register' className='lnk'>Don't have an account? Register now!</a>

  </center>

            <center>
			<button className='log-btn' type="submit" onClick={handleSubmit}>Login</button>
			<button className='log-btn cancel'  style={{backgroundColor:"gray"}} onClick={(e)=>{
               e.preventDefault();
               window.location="./";
            }
            }>Home</button>

            </center>

           


		</div>



	</div>

    </>
)} 

export default Login;