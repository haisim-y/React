import logo from './logo.svg';
import './App.css';
import About from './components/about';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";



//byubvyuv
function App() {
  return (

    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>
    //       hello friend
    //     </h1>
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
     
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

<BrowserRouter>
 <Route path="about">
   <About/>

 </Route>
</BrowserRouter>
 
  );
}

export default App;
