import React from "react";
//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
//Styles
import { GlobalStyle } from "./GlobalStyle";
//Context
import UserProvider from "./context";

//without jsx Example
// const Star =()=> React.createElement('div', null,'This is a litte Star');

//Will do an implicit return (only with arrow functions);
const App = () => (
  <Router>
    {/*to left the router out of the routes I put it away from the Routes */}
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </UserProvider>
  </Router>
);
// function App() {
//   // //without jsx
//   // return  Star();
//   return(<div className="App">
//     <Header/>
//     <Home/>
//     <GlobalStyle/>
//   </div>
//   )

// }

export default App;
