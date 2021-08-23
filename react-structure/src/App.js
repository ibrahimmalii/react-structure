import './App.css';
import First from './First';
import Main from './components/DayOne/Main/Main';
import FunctionlTest from './components/DayTwo/FunctionalTest'
import ManualForm from './components/DayTwo/Forms/ManualForm'


const App = () => {
    return ( 
    <div className = "App" class = "container" >
        <> 
        { /* <h1 className="text-primary bg-dark">This is first words from app.js</h1> */ } 
        { /* <First /> */ }


        { /* <h1>This is first task about portfolio</h1> */ } 
        {/* <Main / > */}

        {/* <FunctionlTest /> */}

        {/* this is day two about forms and manually validation  */}
        <ManualForm />
        </>
    </div>
    );
}

export default App;