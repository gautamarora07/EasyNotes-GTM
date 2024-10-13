import React from 'react'
import { MdDelete } from "react-icons/md";
import './style/MyNotes.css'

// const cards = Array.from(document.querySelectorAll(".card"));
// const cardsContainer = document.querySelector("#cards");

// cardsContainer.addEventListener("mousemove", (e) => {
//   for (const card of cards) {
//     const rect = card.getBoundingClientRect();
//     x = e.clientX - rect.left;
//     y = e.clientY - rect.top;

//     card.style.setProperty("--mouse-x", `${x}px`);
//     card.style.setProperty("--mouse-y", `${y}px`);
//   }
// });

const Note = (props) => {

    const delCard = ()=>{
      props.onDelete(props.id)
    }


  return (
    // <div  className='border-black drop-shadow-lg bg-slate-300 w-auto h-auto  float-left   m-3 p-5  text-center '>  
    //     <p className='text-xl  font-bold text-black'> {props.title}</p>
    //     <p className='text-xl font-medium text-gray-700'>{props.desc}</p>
    <div  className='note-card '>  

    

        <p className='note-title'>  
          {props.title} 
          <button className='btn-del '  onClick={delCard}><MdDelete style={{fontSize : '1.2rem'}} /></button> 
        </p>
        <p className='note-desc'>{props.desc}</p>
    

    </div>
  )
}

export default Note

//text-grey font-bold hover:text-sky-400  float-right rounded mb-4 w-5 h-5

// text-lg font-bold text-black text-center p-2

// text-base font-medium text-black text-justify p-2 pt-0