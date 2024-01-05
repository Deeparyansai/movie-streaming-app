import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MovieFlix from './pages/MovieFlix';
import Player from './pages/Player';
import Movies from './pages/Movies';
import TVShows from './pages/TvShows';
import UserLiked from './pages/UserLiked';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element = {<MovieFlix />} / >
        <Route path='/login' element = {<Login />} / >
        <Route path='/signup' element = {<SignUp />} / >
          <Route path = '/movies' element = {<Movies />} />
          <Route path = '/tv' element = {<TVShows />} />
          <Route path = '/mylist' element = {<UserLiked />} />
          <Route path='/player' element = {<Player />} />
    
    </Routes>
    </BrowserRouter>
  )
}

export default App;