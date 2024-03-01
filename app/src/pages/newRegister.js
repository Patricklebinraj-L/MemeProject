import React,{useState} from 'react';
import './newLogin.css';
import config from '../config/config';

const Register=()=>{ 

    const[flag,setFlag] = useState(0);


//--------------------------------


const[log,setLog] = useState({name:'',pass:'',repass:''});
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


    //  http://localhost/socio/backend/register.php
    //  http://patrickweb.42web.io/backend/register.php
    
    fetch(`${config.apiUrl}/backend/register.php`,
    {method:"POST",
    body:formdata
    })
    .then(res=>res.json())
    .then(res=>{
        if(res.success){
            alert("Register successful !")
            window.location = "/login";
        }
        else{
            alert(res.error);
        }
        console.log(res);
    })
    

}





	return(

        <>

        <div className='sheet'></div>

	<div className='container'>
		
      


            <div className='con2'>


            <h1>Welcome To Focio</h1>

            <p>
                Welcome to Focio!, Please log in to access your account
                and manage your account If you don't have account yet, You can register below
            </p>



            </div>



            <div   style={flag===1?{visibility:"hidden"}:{visibility:"visible"}} className='con'> 
        <h2 id="log-tit">Register</h2>
			<div className='fld'> 
				<label htmlFor="email">User Id or Email</label>
				<input type="text" name="name" id="name"  onChange={handleChange}  placeholder='user id'   autoComplete='off'/> 
               
            </div> 
			<div className='fld' style={{marginTop:"10px"}}> 
				<label htmlFor="passw">Password</label>
			<input type="text" name="pass" id="pass" onChange={handleChange}  placeholder='password'   autoComplete='off'/> 
			
            </div>  

            <div className='fld' style={{marginTop:"10px"}}> 
				<label htmlFor="passw">Re-type Password</label>
			<input type="text" name="repass" id="pass" onChange={handleChange}  placeholder='password'   autoComplete='off'/> 
			
            </div>

            <center> 
        
              <a href='./login'>Already have an account? login now!</a>

        </center>



			<center>
			<button className='log-btn' type="submit" onClick={handleSubmit}>Register</button>
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

export default Register;