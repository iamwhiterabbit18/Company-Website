import './App.css';
import Intro from './Components/Intro';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

const App = () => {
  return ( 
    <div>
      <Intro />
      <About />
      <Projects />
      <Footer />
    </div>
   );
}
 
export default App;