import { useState , useRef } from 'react'
import { IoHome } from 'react-icons/io5';

import { GiBookshelf } from "react-icons/gi";
import { BsFillClipboard2Fill } from "react-icons/bs";
import { BsFillCaretUpFill } from "react-icons/bs";

import { Route, Routes , Link } from 'react-router-dom';
import Home from './components/Home';
import Modules from './components/Modules'

import Quiz from './components/Quiz';
import Python from './components/Python';
import Assigment from './components/Assignment';



function App() {
 
// const token = false;
const[token , setToken] = useState(false);

const [page, setPage] = useState("/")

const highlight = { backgroundColor: "whitesmoke", color: "#15284a" };
const valRef = useRef("DS3031221")
const ShowDropdown = () =>{
  setToken(!token)
}

const side_options_highlight={
  backgroundColor: "#e1e7f2",
  color: "#15294b"
}



  return (
    <>
      <div className="main-body">
        <div className="header">
          <div className="title">
            <img className='title-img' src="./assets/edyoda.png" alt="title" />
          </div>
          <div className="user">
            <p className="user-name">Hi Test Learner!</p>
            
            <img className='user-img' src="./assets/user.png" alt="photo" />
            
            
            {/* <Home className='user-img'/> */}

          </div>
        </div>
        <div className="header-bar">
          <div className="dropdown-wrap">

            
          <div className="header-bar-options" onClick={ShowDropdown}>
            <div className="subject-code"
             onClick={()=>{
              // console.log( valRef.current.textContent)
            }}
            >{valRef.current} 
            <BsFillCaretUpFill style={{marginLeft:'5px',  transform: !token ? 'rotate(180deg)' : 'rotate(0)', transition: " 0.3s ease"}}/>
            </div>
            <div className="subject-name">Data Scientist Program</div>
          </div>

          <div className="header-bar-dropdown" style={{opacity:token?'1':'0',
          zIndex:token?'2':'-1'
          }}>

            
             <div className='dropdown-heading' >Select Program</div>

            <p className='subject-code-options' >ECRD</p>
            <p className='subject-code-options'>FSR22222</p>
            <p className='subject-code-options'>DS261121</p>
            <p className='subject-code-options'style={ "DS3031221" === valRef.current? highlight : {} }>DS3031221</p>
            

          </div>

          </div>

        </div>
        <div className="content">
          <div className="sidebar">
            <Link to="/" onClick={()=>setPage("/")} className={page == "/" ? 'side-options side-options-highlight':' side-options '}>
            <IoHome  className='side-icons' width="4em"/>
            Home
            </Link>

            <Link to="/modules" onClick={()=>setPage("/modules")} className={page == "/modules" ? 'side-options side-options-highlight':' side-options '} >
            <GiBookshelf className='side-icons'/>
            Modules
            </Link>

            <Link  className="side-options">
            <BsFillClipboard2Fill className='side-icons'/>
            Instructions
            </Link>


          </div>
          <div className="pages">
            <Routes>

              <Route exact  path='/' element={<Home/>} />
              <Route path='/modules' element={<Modules/>}>

              <Route index element={<Python/>}></Route>
              <Route path='quiz' element={<Quiz/>}></Route>
              <Route path='assignment' element={<Assigment/>}></Route>

                 
              </Route>
              

            </Routes>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
