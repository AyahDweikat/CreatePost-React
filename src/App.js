import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import React, { Component } from 'react'
// import Child from './Component/Child/Child';
import Post from './Component/Post/Post';

function App() {
  return (
    <div>
      <Post/>
    </div>
  )
}

export default App