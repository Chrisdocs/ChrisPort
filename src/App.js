import React from 'react';
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
      <Navigation></Navigation>
      <Footer></Footer>
    </div>
  );
}

export default App;
