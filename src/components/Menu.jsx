import React,{useState} from 'react'
import './style/Menu.css'
import { FaHome , FaGoogleDrive , FaBook} from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6"
import { IoClose , IoLogIn, IoMoon, IoSunny, IoPerson} from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import Profile from './Profile';


const menuData = [
  {
    title : "Home",
    icon : <FaHome/>,
    link : "/"
  },
  {
    title : "Google Drive",
    icon : <FaGoogleDrive/>,
    link : "https://bit.ly/gtmxbbdu"
  },
  {
    title : "My Notes",
    icon : <FaNoteSticky />,
    link : "/MyNotes"
  },
  {
    title : "Syllabus",
    icon : <FaBook />,
    link : ""
  }
] 

const Menu = ({isOpen, onClose}) => {

  const navigate = useNavigate();
  const [dark, setDark] = useState(false);
  const [Prof, setProf] = useState(false);
  const handleLoginClick = () => {
    navigate('/login');
  };

    const toggleTheme = () => {
      
      if (document.body.classList.contains('dark-theme')) {   
        setDark(true); 
        document.body.classList.remove('dark-theme');

      } else {
        setDark(false);
        document.body.classList.add('dark-theme');
      }    };
  
   
  return (
    <>
     
    {
      <div className='menu_container ' >
        <div className={Prof ?  "detail_section showProf" : "detail_section"}>

          <div className="extra_option">
        
           
            <div className="extra1" onClick={()=>toggleTheme()}>   
            {  document.body.classList.contains('dark-theme') ? <IoSunny/> : <IoMoon/> } </div>
      
            <div className="extra2"  onClick={handleLoginClick} > <IoLogIn/>   </div>
            
          </div>
          
          <div className={Prof ? "profile-container showProf":"profile-container"}>
            <span onClick={()=>setProf(!Prof)} className='close-btn-span'> < IoClose  className='close-btn'/></span>
            <Profile/>
            </div>
        
        </div>
        
        <div className="menu-items">
          {
            menuData.map((item, idx)=>{
              return (
                <Link to={item.link} className='menu_item' key={idx}>
                  <div className="item_icon">{item.icon}</div> 
                  <div className="item_title">{item.title}</div> 
                </Link> )       
            })
          }

                <div className='menu_item extra' onClick={()=>setProf(!Prof)}> 
                  <div className="item_icon"><IoPerson/></div> 
                  <div className="item_title">Profile</div> 
                </div>
        
                <div className='menu_item extra' onClick={()=>toggleTheme()} >
                  <div className="item_icon"> {(dark)?<IoMoon/>:<IoSunny/>}</div> 
                  <div className="item_title">Theme</div> 
                </div>
        </div> 
      </div> 
      }
        
    </>
  )
}


export default Menu;

