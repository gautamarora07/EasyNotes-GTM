import React , {useState} from 'react'
import noticeData from './data/noticeData.json';
import './style/Accordion.css';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
const {notices} = noticeData;

const Accordion = () => {
  const [select, setSelect] = useState(null);

  const toggle = (i) => {
    (select === i) ? setSelect(null) : setSelect(i);
  }

  return (
    <div className="N-container">
      <span className="heading">NOTICES</span>


    { 
      notices.map((N, idx)=>{
        
        return (         
           <div className="N-div" key={idx}>
              
              <div className = { (select === idx) ? "N-head showHead"  : "N-head"}  onClick={()=>toggle(idx)}> 
                <span  className="N-icon" > 
                  { (select === idx) ? <FaAngleUp/> : <FaAngleDown/>} 
                </span> 
                  {N.head} 
              </div>

              <div className = { (select === idx) ? "N-desc showDesc"  : "N-desc"}> 
                 {N.desc} 
              </div>  

            </div> 
     
        );
      }) 
    }
    </div>
  )
}

export default Accordion