"use client"
import React , {useState} from 'react'
import Card from './Note'
import './style/MyNotes.css'
import { FaPencilAlt } from "react-icons/fa";


const MyNotes = () => {
   const [head, sethead] = useState("")
   const [info, setinfo] = useState("")
    const [tasks, settasks] = useState([])


   //  function getTasks() { return tasks;}
   
   const submitHandle = (e) =>{
      e.preventDefault()  
    
      settasks([...tasks, {head,info}]);

      
      sethead("");
      setinfo("");
      
   }

   const delTask = (i) => {
      let copyTasks = [...tasks]
      copyTasks.splice(i,1)
      settasks(copyTasks);
   }



   const renderTasks = (tasks.length>0)  
   ?  tasks.map( (t,i) => {   return   <Card key={i} id={i} title={t.head} desc={t.info}  onDelete={delTask}  />        })    
   :  <div className='notes-msg'>IMPORTANT NOTES CAN BE ADDED HERE </div>

  return (
    <>

        <section className="myNotes-section"> 
        <h1 className="notes-heading">NOTES</h1>
     <form  style={{textAlign : "center"}} onSubmit={submitHandle}>
      
        <input className='inp-title ' type="text"  name="title" placeholder='Enter the title ' value={head} onChange={(e)=>{sethead(e.target.value)}} />
        
       
        <textarea className='inp-desc' type="text"  name="desc" placeholder='Enter the description here' value={info} onChange={(e)=>{setinfo(e.target.value)}} />

        <button className='btn-add ' > ADD </button>
     </form>

         <div className='notes-container'>    <ul> {renderTasks} </ul>  </div>

         </section>
      </>
  )
 
 

}

export default MyNotes


// text-center text-2xl

// bg-sky-300 text-white  border-3 rounded text-2xl text-center font-bold m-2 px-3 py-2

//  m-3 p-2 p rounded border border-slate-900 text-blue text-1xl

//  m-3 p-2 p rounded border border-slate-900 text-blue text-1xl

//bg-black text-white text-1xl my-2 mx-auto px-5 py-1 block rounded drop-shadow-md hover:drop-shadow-lg hover:scale-110 hover:bg-sky-400

// mt-10  p-2