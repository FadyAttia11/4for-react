import React from 'react';
import './App.scss'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Routes from './Routes/Routes'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const App = () => {

  return (
    <div>
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;
