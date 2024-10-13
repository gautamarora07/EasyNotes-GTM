import React from 'react'
import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import {Link} from 'react-router-dom';
import './style/Footer.css'
const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <>
    <footer>
          <div className="footer">
            <div className="footer-container">
              <p className="footer-head">[PROJECT_01]</p>
              <p>Welcome to the [page].You can find all the important notifcations and doucments here for free.</p>
            </div>

            <div className="footer-container">
              <p className="footer-head">Quick Links</p>
              <div className="ql-container">
                <div className="quicklinks-left"> 
                  <Link to="/" className='quicklink'>Home</Link>
                  <Link to="/" className='quicklink'>Notices</Link>
                  <Link to="/" className='quicklink'>Library</Link>
                  <Link to="/" className='quicklink'>Syllabus</Link>
                </div>
                <div className="quicklinks-right">             
                  <Link to="/" className='quicklink'>PYQs</Link>
                  <Link to="/" className='quicklink'>Google Drive</Link>
                  <Link to="/" className='quicklink'>Contact</Link>
                  <Link to="/" className='quicklink'>Feedback</Link>
                </div>
              </div>
           </div>

            <div className="footer-container">
              <p className="footer-head">Social</p>
              <div className="social-container">
                <a href="/" className="social-icon"><FaWhatsapp/></a>
                <a href="/" className="social-icon"><FaInstagram/></a>
                <a href="/" className="social-icon"><FaLinkedin/></a>
                <a href="/" className="social-icon"><FaYoutube/></a>
              </div>
            </div>

            <div className="footer-container">
             <p className="footer-head">Contact</p>
             <p >+91 8887960815</p>
             <p>gtmdhoni@gmail.com</p>
            </div>


          </div>

            <div className="copyright">Copyright &copy; {year} | All Rights Reserved. </div>
    </footer>
            </>
  )
}

export default Footer