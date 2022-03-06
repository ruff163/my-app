import logo from './logo.svg';
import './App.css';
import Header from './header';
import Nav from './nav';
import Profile from './profile';

const App=()=> {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Nav />
      <Profile />
    </div>
  );
}


export default App;
