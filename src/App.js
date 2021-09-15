import './App.css';
import { Route, Link, Switch } from 'react-router-dom'

import NavBar from './components/NavBar';
import Display from './components/Display';
import Liked from './components/Liked';
import Test from './components/test';

function App() {

  
  const likedListt = JSON.parse(localStorage.getItem('likedList')) || []

  const removePhoto = (photo) =>{
    likedListt.splice(likedListt.indexOf(photo), 1);
    localStorage.setItem('likedList', JSON.stringify(likedListt))
    window.location.reload(false);
  }
  console.log(likedListt, 'local')

  return (
    <div className="App">
     <NavBar />
     <Switch>
       <Route path='/liked'>
         <Liked likedListt={likedListt} removePhoto={removePhoto}  />
       </Route>
       <Route path='/test'>
         <Test />
       </Route>
       <Route path='/'>
         <Display likedListt={likedListt}  />
       </Route>
     </Switch>
    </div>
  );
}

export default App;
