// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/">
            <Profile />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </Route>
          {/* Add other routes here if needed */}
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
