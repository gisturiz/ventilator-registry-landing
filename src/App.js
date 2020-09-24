import React from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Middle from './components/Middle';
import Bottom from './components/Lower';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Middle />
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;
