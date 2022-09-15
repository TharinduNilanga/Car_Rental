import React from "react";
import {Route,Routes} from 'react-router-dom'
import DashBoard from "./Pages/DashBoard/DashBoard";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";


function App() {
  return (
     // <Routes>
     //     <Route exact path='/' element={<DashBoard/>}/>
     //     <Route  path='/login' element={<Login/>}/>
     // </Routes>
     // <DashBoard/>
     // <Login/>
      <SignUp/>
  );
}

export default App;
