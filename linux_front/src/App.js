
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Users from './components/Users';
import Posts from './components/Posts';
import Comments from './components/Comments';
import UserDetail from './components/UserDetail';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="users" element={<Users/>}/>
        <Route path="posts" element={<Posts/>}/>
        <Route path="comments" element={<Comments/>}/>
        <Route path="UserDetail" element={<UserDetail/>}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}


export default App;
