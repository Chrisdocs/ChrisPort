import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="main-content">
        <h1 className="main-hello">Hello!</h1>
        <p className="main-text">My name is Christopher Wolfe!  Welcome to my portfolio!</p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
