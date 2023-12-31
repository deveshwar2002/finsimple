import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Stock from './components/Stock'; // Import the Stock component

import {
  BrowserRouter,
  BrowserRouter as Router,Link,
  Switch,
} from "react-router-dom";
import Footer from './components/Footer';
import InstagramPost from './components/InstagramPost';
import PrivacyPolicy from './components/PrivacyPolicy';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>

  <React.StrictMode>
  <App />
  <br>
</br>
<br>
</br>
<br>
</br>
  <InstagramPost/>
  <br>
  </br>
  <br>
</br>
<br>
</br>
<br>
</br>
  </React.StrictMode>
  {
  <Stock/>
}
<br>
</br>
<br>
</br>
<br>
</br>
<Footer/>
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
