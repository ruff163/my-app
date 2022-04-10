
import './App.css';
import Header from './header/header';
import Nav from './navbar/nav';
import Profile from './profile/profile';
import Dialogs from './Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { addPost } from './redux/state';

const App=(props)=> {
  
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header/>
      <Nav />      
      <div className='app-wrapper-content'>
        <Routes>
        <Route path='/Dialogs/*' element ={<Dialogs state={props.state.dialogsPage}/>} />
        <Route path='/profile' element ={<Profile state={props.state.profilePage} addPost={props.addPost}/>} />
        </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}


export default App;
