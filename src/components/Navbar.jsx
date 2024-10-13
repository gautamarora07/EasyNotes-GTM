import React, {useState, useEffect, useRef} from 'react'
import './style/Navbar.css'
import {Link, NavLink} from 'react-router-dom'
import Menu from './Menu'
import {  IoEllipsisVertical} from "react-icons/io5";


const Navbar = () => {
//  const [show, setshow] = useState(false)
//  const toggle = () => setshow(!show)

const [open, setOpen] = useState(false)
 const [menuOpen, setMenuOpen] = useState(false);
//  const menuRef = useRef();

//  useEffect( ()=> {
//    let handler = (e)=>  {
//      if(!menuRef.current.contains(e.target))
//      { console.log("Outside menu and MENU option clicked!", menuRef.current )
//      console.log(menuOpen);
//          setMenuOpen(false);   }
//     };

//   document.addEventListener("mousedown", handler);
 
//   return ()=>{
//     document.removeEventListener("mousedown", handler)
//   }
//  });

  return (
    <div className="header-container">
    <header > 
        <div className="head_logo" > 
            <Link to="/" className='logo_item' ><span id='heart'>❤ </span>GTM</Link>
        </div>
        <div className={open ? "head_options open": "head_options"}>
             <NavLink to="/" className="head_item" > Home </NavLink>
             <NavLink to="/Notices" className="head_item"> Notices </NavLink>
             <NavLink to="/Library" className="head_item"> Library </NavLink>
             <NavLink to="/PYQs" className="head_item"> PYQs </NavLink>
             
             {/* onClick = {toggle}  */}
             <div  className=" menu_icon " onClick={()=>setMenuOpen(!menuOpen)} >More</div>
             {console.log("menuOpen : ", menuOpen)}
             <div className= {menuOpen ? "menu open" :"menu"}  >   <Menu   />   </div>    
             {/* isOpen={menuOpen}      onClose={toggleMenu}  */}
        </div>
        {/* {if({open}==false) {setMenuOpen(false)}} */}
        
              <div className="bars" onClick={()=>{setOpen(!open) }}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
    </header>
    </div>
  )
}

export default Navbar;