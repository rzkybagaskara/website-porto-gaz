import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import './Home';
import Home from './Home';
import './Navbar';
import Navbar from './Navbar';
import './Projects';
import Projects from './Projects';
import './styles.css';

function App() {
  // Trigger AOS
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  // routing
  let component;
  switch (window.location.pathname) {
    case '/':
      component = <Home />;
      break;
    case '/projects':
      component = <Projects />;
      break;
  }
  return (
    // components
    <>
      <Navbar />
      {component}
    </>
  );
}

export default App;
