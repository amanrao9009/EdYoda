import { Route, Routes , Link  , Outlet} from 'react-router-dom';
import { useState } from 'react';
import Quiz from './Quiz';
import Python from './Python';
import Assigment from './Assignment';
const Modules = () => {
   
  const [course , setCourse] = useState("/modules")

    return ( <>


      <div className="module-wrap">
        <div className="module-sidebar">
           <Link to='/modules' onClick={()=>setCourse("/modules")} className={course == "/modules" ? ' module-option module-option-highlight':'module-option'}>   <img src="public/assets/topic.svg" alt="" />  <p>Python Loops</p> </Link>
           <Link to='quiz' onClick={()=>setCourse("quiz")} className={course == "quiz" ? ' module-option module-option-highlight':'module-option'}> <img src="public/assets/assignment.svg" alt="" />   <p>Quiz-1: Data Types</p> </Link>
           <Link to='assignment' onClick={()=>setCourse("assignment")} className={course == "assignment" ? ' module-option module-option-highlight':'module-option'}>  <img src="public/assets/moduleQuiz.svg" alt="" /> <p>Assignment-1: Operators | Loop </p> </Link>

        </div>
        <div className="module-body">
          {/* <Routes> */}

            {/* <Route path='/modules'> */}

            {/* <Route index element={<Python/>}></Route>
            <Route path='quiz' element={<Quiz/>}></Route>
            <Route path='assignment' element={<Assigment/>}></Route> */}
            <Outlet></Outlet>

            {/* </Route> */}
            

          {/* </Routes> */}
        </div>
      </div>
    
    
    </> 
    
    );
}
 
export default Modules;