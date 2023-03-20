import React from 'react';
import './styles.css';
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Welcome from "./Welcome";
import Presentation from "./Presentation";

const App = () => {
  return(
    <React.Fragment>
      <Header/>
      <Welcome/>
      <About/>
      <Skills/>
      <Project/>
      <Presentation/>
    </React.Fragment>
  )
}


export default App;


//Why single ' '  for files names with extension? and double quaotation without extension
//what is React.Fragment