import logo from './logo.svg';
import './App.css';
import React from 'react';

import {Article, Brand, CTA, Navbar } from './components';
import {Footer, Header, Blog, WhatGPT3, Features, Possibility} from './containers';

const App= () => {
  return (
    <div className="App">
      <div className="gradient__bg">
      <Navbar />
      <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
