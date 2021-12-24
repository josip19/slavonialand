import React from  'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Naslovnica from './components/stranice/Naslovnica';
import Usluge from './components/stranice/usluge';
import Događaji from './components/stranice/događaji';
import Prijava from './components/stranice/Prijava';
import Onama from './components/stranice/O nama';
function App() {

  return (
    <>
      <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Naslovnica}/>
        <Route path="/usluge" component={Usluge}/>
        <Route path="/dogadjaji" component={Događaji}/>
        <Route path="/prijava" component={Prijava}/>
        <Route path="/o-nama" component={Onama}/>
      </Switch> 
      </Router>
      
    </>
    
  );
}

export default App;
