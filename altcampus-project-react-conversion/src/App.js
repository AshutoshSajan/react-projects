import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Maps from './Maps';
import Table from './Table';
import Info from './Info';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Portfolio />
        <About />
        <Contact />
        <Maps />
        <Table />
        <Info />
        <Footer />
      </div>
    );
  }
}

export default App;
