import React from 'react';
import Header from './components/Header';
import Home from './components/Home';

//Styles
import {GlobalStyle} from './GlobalStyle';

//without jsx Example
// const Star =()=> React.createElement('div', null,'This is a litte Star');

function App() {
  // //without jsx
  // return  Star();
  return(<div className="App">
    <Header/>    
    <Home/>
    <GlobalStyle/>
  </div>
  )
 
}

export default App;
