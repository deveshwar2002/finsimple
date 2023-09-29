
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
//import NewsItem from './components/NewsItem';
import Stock from './components/Stock'; // Import the Stock component
import PrivacyPolicy from './components/PrivacyPolicy';

import React, { Component } from 'react'
import {
    Switch,Route
} from "react-router-dom";

const StockMarket = () => {
  return (
    <>
          

      <NavBar/>
      <section className="Stock">
        <p>Stock </p>

      </section>
    </>
  );
};


export default class App extends Component {

  render() {
    return (
      <div>
                 

       <switch>
        <NavBar>  </NavBar>
        <News> </News>
        <Route exact path="/Stock">
        // App.js


        // App.js
<Route path="/privacy-policy" component={PrivacyPolicy} >
           </Route>
        </Route>
        </switch>

      </div>
    )
  }
}


