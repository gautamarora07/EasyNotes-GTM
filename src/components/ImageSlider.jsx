import React, {useState} from 'react';
import { GoChevronLeft , GoChevronRight } from "react-icons/go";
import './style/ImageSlider.css';

const ImageSlider = ({data}) => {
  const  [current, setcurrent] = useState(0);

const nextSlide = ()=>
{  setcurrent(current===data.length-1 ? 0 : current+1 ); }

const prevSlide = ()=>
{  setcurrent(current===0 ? data.length-1 : current-1 ); }

return (
    <div className='slider ' >
 
        <GoChevronLeft className="arrow arrow-left" onClick={prevSlide}/>
        {
            data.map((slide, index)=>{
                return <img src={slide.src} alt={slide.alt} key={index} className={current===index ?"slide" : "slide slide-hidden"}/>
            })
        }
        <GoChevronRight className="arrow arrow-right" onClick={nextSlide}/>

        <span className="indicators">
          {
            data.map((_,idx)=>{
                 return <button key={idx} className={current === idx ? "indicator" : "indicator indicator-inactive"} onClick={()=>setcurrent(idx)}></button>
            })
          }
        </span>
    </div>
  )
}

export default ImageSlider