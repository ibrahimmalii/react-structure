
import './App.css';
import First from './First';
import Header from './DayOne/Header/Header';
import AboutMe from './DayOne/AboutMe/AboutMe';
import Skills from './DayOne/Skills/Skills';
import Portfolio from './DayOne/Portfolio/Portfolio';
import References from './DayOne/References/References';

const App = () => {
  return (
    <div className="App">
      <>
      {/* <h1 className="text-primary bg-dark">This is first words from app.js</h1> */}
      {/* <First /> */}


      <h1>This is first task about portfolio</h1>
      <Header />
      <AboutMe />
      <Skills />
      <Portfolio />
      <References />
      </>
    </div>
  );
}

export default App;
