import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
// import Home from './Components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Products from './Components/pages/Products';
// import SignUp from './Components/pages/SignUp';
import AboutUs from './Components/pages/AboutUs';
import Home from './Components/pages/HomePage/Home';
import Services from './Components/pages/Services/Services';
import Products from './Components/pages/Products/Products';
import SignUp from './Components/pages/SignUp/SignUp';
import Footer from './Components/Footer'; 
import Built from './Components/pages/Built';
import NextPro from './Components/pages/NextPro';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch><Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/about-us' component={AboutUs}/>
        <Route path='/built' component={Built}/>
        <Route path ='/resources'component={NextPro}/>

        {/* <Route path='/' exact component={Home} />
        <Route path='/about-us' component={AboutUs} />
        <Route path='/library' component={Library} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
