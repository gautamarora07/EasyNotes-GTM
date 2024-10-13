import React from 'react'
import {Link} from 'react-router-dom';
import './style/Card.css'

const Card = (props) => {
  // const S1S1 = useRef(null);
  // const scrollTo = (elementRef)=>{
  //     window.scrollTo({
  //       top : elementRef.current.offsetTop,
  //       behavior : 'smooth', })  }

  // const navigate = useNavigate();
  // const gotoS2S1 = ()=>
  // {  navigate('/PYQs/S2S1')  }

  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="face face1">
            <div className="exm" >{(props.exm[0]==='1') && <Link class = 'exmLink' to={'/PYQs/S' + props.sem + 'S1'}>SESSIONAL I</Link>}</div>
            <div className="exm" >{(props.exm[1]==='2') && <Link class = 'exmLink' to={'/PYQs/S' + props.sem + 'S2'}>SESSIONAL II</Link>}</div>
            <div className="exm" >{(props.exm[2]==='F') && <Link class = 'exmLink' to={'/PYQs/S' + props.sem + 'F'}>FINAL</Link>}</div>
          </div>
          <div className="face face2">
            <h5 className="card-head">SEMESTER<br/>{props.sem} </h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card  
