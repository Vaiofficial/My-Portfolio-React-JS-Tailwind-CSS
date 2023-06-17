import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Sociallinks from "./components/Sociallinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Youtube from "./components/Youtube";

function App() {
  return (
    <div>
      <Navbar /> 
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Youtube/>
      <Contact/>
      <Sociallinks/>
    </div>
  );
}

export default App;
