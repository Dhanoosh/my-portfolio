import React from 'react';
import './styles.css';
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";

const App = () => {
  return(
    <React.Fragment>
      <Header/>
      <About/>
      <Skills/>
    </React.Fragment>
  )
}


export default App;


//Why single ' '  for files names with extension? and double quaotation without extension
//what is React.Fragment