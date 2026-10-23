import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Search from './pages/Search'
import TestEnv from './pages/TestEnv'
import AddMovie from './pages/AddMovie'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
       <Route path="/" element={<Home />} />
       <Route path="movie/:id" element={<Movie />} />
       <Route path="search" element={<Search />} />
       <Route path="/test" element={<TestEnv />}/>
       <Route path="/add-movie" element={<AddMovie />}/>
    
      </Route>
    </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
