
import './footer.css';

const Footer = ()=>{

    return(
        <>
        <div className="footer-con" id="footer">

        <h1>Focio</h1>
        <div className='footer-link'>
            <a href='/'>Home</a>
            <a href='/editor'>Meme Editor</a>
            <a href='/contact'>Contact us</a>
            <a href='/about'>About us</a>
        </div>

        <div className='cr'>
            <p>copyright reserved at 2023</p>
        </div>

        </div>


        </>
    );


}

export default Footer;