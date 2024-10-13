import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Home, Notices, Library, PYQs, Error, QP} from './pages'
import {Routes , Route} from 'react-router-dom'
import MyNotes from './MyNotes'
import Login from  './Login'



const app = () => {
  return (
    <div>
         <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />

            <Route path='Notices' element={<Notices/>} />

            <Route path='Library' element={<Library/>} />

            <Route path='login' element={<Login/>} />

            <Route path='PYQs'>
              <Route index  element={<PYQs/>}/>
              <Route path=':id' element={<QP/>}/>
            </Route>
            
            <Route path='MyNotes' element={<MyNotes/>}/>
            <Route path='*' element={<Error/>} />

            
        </Routes>
        <Footer/>

    </div>
  )
}

export default app