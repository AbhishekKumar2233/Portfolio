import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skill/Skills';
import Resume from './components/Resume/Resume';
import Sidebar from './components/SIdebar/SideBar';
import Projects from './components/MyWork/Projects';
import Contact from './components/Contact/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <>
    <ToastContainer />
      <div id='app-counter' className="app-container container-fluid">
        <div className="row flex-nowrap">
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Skills' element={<Skills />} />
            <Route path='/Resume' element={<Resume />} />
            <Route path='/Projects' element={<Projects />} />
            <Route  path='/Contact' element={<Contact />} />


          </Routes>
        </div>
      </div>

    </>
  )
}

export default App
