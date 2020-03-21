import React from 'react';
import Navbar from "./components/navbar"
import Home from "./components/home"
import Contact from "./components/contact"
import About from "./components/about"
import {BrowserRouter,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
