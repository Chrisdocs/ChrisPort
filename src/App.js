import React, {Component} from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
