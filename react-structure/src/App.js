import './App.css';
import First from './First';
import Main from './components/DayOne/Main/Main';
import FunctionlTest from './components/DayTwo/FunctionalTest';
import ManualForm from './components/DayTwo/Forms/ManualForm';
import TodoList from './components/DayTwo/TodoList/TodoList';
import Revision from './Revision';
import NavBarComponent from './components/NabBar/NavBarComponent';
import AddPerson from './components/DayThree/Add/AddPerson';
import PersonList from './components/DayThree/List/PersonList';
import UpdatePerson from './components/DayThree/Update/UpdatePerson';
import MoviesList from './pages/Movies/MoviesList/MoviesList';
import MovieDetails from './pages/Movies/MovieDetails/MovieDetails';



// Import Router 
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
// import PersonList from './pages/List/PersonList';


const App = () => {
    return (
        <div className="App" className="container" >
            <>
                { /* <h1 className="text-primary bg-dark">This is first words from app.js</h1> */}
                { /* <First /> */}


                { /* <h1>This is first task about portfolio</h1> */}
                {/* <Main /> */}

                {/* <FunctionlTest /> */}

                {/* Day two about forms and manually validation  */}
                {/* <ManualForm /> */}
                {/* <TodoList /> */}
                {/* <Revision /> */}





                {/* Day 3 About Routing And Call Api */}
                <Router>
                <NavBarComponent />
                <Switch>
                    <Route path="/details/:id" >
                        <MovieDetails />
                    </Route>
                    <Route path="/">
                        <MoviesList />
                    </Route>
                </Switch>
                </Router>
            </>
        </div>
    );
}

export default App;


