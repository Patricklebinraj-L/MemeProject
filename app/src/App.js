import React from 'react';
import Home from './pages/home';
import Login from './pages/newLogin';
import Register from './pages/newRegister';
import Videos from './components/video';
import Pics from './components/pics';
import './App.css';
import Editor from './components/editor';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Content from './components/content';
import Grid from './components/grid';




function App() {
  return (

<div>

<BrowserRouter >

  <Routes >
  <Route path='/' element={ <Home/> } exact />
  <Route path='/post' element={ <Home/> } />
  <Route path='/login' element={ <Login/> }  exact/>
  <Route path='/register' element={ <Register/> }  />
  <Route path='/editor' element={ <Editor/> }  />
  <Route path='/videos' element={ <Videos/> }  />
  <Route path="/pics" element={<Pics/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/post/:id" element={<Content/>} />
  <Route path="/grid" element={<Grid/>} />

  </Routes>
</BrowserRouter>

</div>
    
  );
}

export default App;
