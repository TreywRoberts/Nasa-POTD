import './App.css';
import { Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar';
import Display from './components/Display';
import Liked from './components/Liked';

function App() {

  
  const LSLikedList = JSON.parse(localStorage.getItem('likedList')) || []

  const removePhoto = (photo) =>{
    LSLikedList.splice(LSLikedList.indexOf(photo), 1);
    localStorage.setItem('likedList', JSON.stringify(LSLikedList))
    window.location.reload(false);
  }

  return (
    <div className="App">
     <NavBar />
     <Switch>
       <Route path='/liked'>
         <Liked LSLikedList={LSLikedList} removePhoto={removePhoto}  />
       </Route>
       <Route path='/'>
         <Display LSLikedList={LSLikedList}  />
       </Route>
     </Switch>
    </div>
  );
}

export default App;
