import React , {useState} from 'react'
import { CiUser, CiMail, CiLock } from "react-icons/ci";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import './style/Login.css'
const Login = () => {

 const [mode, setMode] = useState(false);

  return (
<>


<div className={mode ? "signin-signup-container sign-up-mode" : "signin-signup-container"}>
  <div className="forms-container">
    <div className="signin-signup">
      <form action="" className="sign-in-form">
        <h2 className="title">Sign In</h2>
          <div className="line"></div>
          <div className="input-field">
            <span className="icon"> <CiUser/>  </span>
            <input type="text" id="Username" placeholder='Username' />
            <label htmlFor="Username">Username</label>
          </div>
          <div className="input-field">
            <span className="icon"><CiLock/> </span>
            <input type="password" id='Password' placeholder='Password' />
            <label htmlFor="Password">Password</label>
          </div>

          <input type="submit" value="Login" className='sign-in-btn solid' />



          <p className="social-text">OR Sign in with social platforms</p>

          <div className="social-media">
          <a href="/" className="social-icon"><FaWhatsapp/></a>
          <a href="/" className="social-icon"><FaInstagram/></a>
          <a href="/" className="social-icon"><FaLinkedin/></a>
          <a href="/" className="social-icon"><FaYoutube/></a>
          </div>


      </form>
      <form action="" className="sign-up-form">
        <h2 className="title">Sign Up</h2>
          <div className="line"></div>
          <div className="input-field">
            <span className="icon"> <CiUser/>  </span>
            <input type="text" id="Username" placeholder='Username' />
            <label htmlFor="Username">Username</label>
          </div>
          <div className="input-field">
            <span className="icon"><CiMail/> </span>
            <input type="email" id='Email' placeholder='Email' />
            <label htmlFor="Password">Email</label>
          </div>
          <div className="input-field">
            <span className="icon"><CiLock/> </span>
            <input type="password" id='Password' placeholder='Password' />
            <label htmlFor="Password">Password</label>
          </div>

          <input type="submit" value="Sign Up" className='sign-in-btn solid' />



          <p className="social-text">OR Sign up with social platforms</p>

          <div className="social-media">
          <a href="/" className="social-icon"><FaWhatsapp/></a>
          <a href="/" className="social-icon"><FaInstagram/></a>
          <a href="/" className="social-icon"><FaLinkedin/></a>
          <a href="/" className="social-icon"><FaYoutube/></a>
          </div>


      </form>
    </div>
  </div>

  <div className="panels-container">
    <div className="panel left-panel">
      <div className="content">
        <h3>New Here?</h3>
        <p>Create a new account from here.</p>
        <button className="btn transparent" onClick={()=>setMode(!mode)} id="sign-up-btn">Sign Up</button>
      </div>
    </div>

    <div className="panel right-panel">
      <div className="content">
        <h3>Have an account?</h3>
        <p>Login with your credentials.</p>
        <button className="btn transparent" onClick={()=>setMode(!mode)} id="sign-in-btn">Sign In</button>
      </div>
    </div>
  </div>
</div>


</>
  )
}

export default Login