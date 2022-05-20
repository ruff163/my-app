import React from 'react';
import './App.css';
import Header from './header/header';
import Nav from './navbar/nav';
import Profile from './profile/profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './Dialogs/DialogsContainer';
import Users from './Users/Users';


const App=()=> {
  
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header/>
      <Nav />      
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element ={<Profile/>} />
          <Route path='/Users' element ={<Users/>} />
          <Route path='/Dialogs/*' element ={<DialogsContainer/>} />
        </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}


export default App;
