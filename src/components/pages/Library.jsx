import React , {useRef} from 'react'
import '../style/Library.css'
import AnimatedList from '../AnimatedList'
import quotesData from '../data/quotesData.json'
import { BiSolidChevronsDown } from "react-icons/bi";

const {quotes} = quotesData;

export const Library = () => {
  const libSection = useRef(null);

  const scrollToLib = (elementRef)=>{
      window.scrollTo({
        top : elementRef.current.offsetTop,
        behavior : 'smooth',
      })
  }

  return (
    <div className='Lib'> 

       <div className="Lib_div ">
            
        <div className="Lib_books">
          <span className="Lib_books_head"> 📚 </span>
          < br />

                <AnimatedList quotesJSON={quotes}/>        

          <p className="Book_info" onClick={() => scrollToLib(libSection)}> 
          <BiSolidChevronsDown/>
          </p>
        </div>


      </div> 



<iframe ref={libSection} title='GDIFrame'  src="https://drive.google.com/embeddedfolderview?id=1YCF3wuxEkwVz9840co8ov4VWs80BYRzZ#grid" frameBorder="0" id="GDFrame" ></iframe>

    </div> 
  )
}


// https://drive.google.com/embeddedfolderview?id=1E1zq_R7iZpqkS23x9m2IYRNxGyLycDig#grid