import './App.css';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import Projects from './Components/Projectss/Projects';
import Footer from './Components/Footer/Footer';
import Renderer from './Components/Renderer';
import Navbar from './Components/Navbar/Navbar';
const App = () => {
  return ( 
    <>
      <Navbar />
      <div style={{
        margin: '0rem 10rem'
      }}>
        <div className="bg-white">
          <Renderer>
            <Intro />
          </Renderer>
            <About />
        </div>
      </div>
        <div className="bg-red">
          <div style={{
            margin: '0rem 10rem'
          }}>
            <Renderer>
              <Projects />
            </Renderer>
            <Renderer>
              <Footer />
            </Renderer>
          </div>
        </div>
    </>
   );
}
 
export default App;