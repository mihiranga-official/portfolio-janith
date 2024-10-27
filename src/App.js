import Navbar from "./Components/NavBar/navbar";
import Intro from "./Components/Intro/intro";
import About from "./Components/About/about";
import Education from "./Components/Education/education";
import Experience from "./Components/Experience/experience";
import Skills from "./Components/Skills/skills";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import Projects from "./Components/MyProject/projects";
import Service from "./Components/MyService/service";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Education />
      <Experience />
      <Service/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
