import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div id="app" className="App">
      <Header />
      <Main />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
