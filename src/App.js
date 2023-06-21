
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './views/Hero';
import Section2 from './views/Section2';
import Section3 from './views/Section3';
import Section4 from './views/Section4';
import Footer from './views/Footer';
function App() {

  return (
    <Router>
    <div className="App">
        
        <div className="content">
          <Hero />
          <Section2 />
          <Section3 />
          <Section4 />
          <Footer />
        </div> 
    </div>
    </Router>
  );
}

export default App;
