import React from 'react';
import Header from './Header';
import About from './About';
import Hobbies from './Hobbies';
import Family from './Family';
import Education from './Education';
import Achievements from './Achievements';
import Footer from './Footer';
import './App.css'; 

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Hobbies />
      <Family />
      <Education />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;
