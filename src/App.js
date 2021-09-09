import './App.css';
import { Route, Link, Switch } from 'react-router-dom'

import NavBar from './components/NavBar';
import Display from './components/Display';
import Liked from './components/Liked';

function App() {

  return (
    <div className="App">
     <NavBar />
     <Switch>
       <Route path='/liked'>
         <Liked />
       </Route>
       <Route path='/'>
         <Display />
       </Route>
     </Switch>
    </div>
  );
}

export default App;
