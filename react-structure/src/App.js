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

// Guards Route 
import { GuardProvider, GuardedRoute } from 'react-router-guards';


// Import Router 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Todo from './components/DayTwo/Todo/Todo';
import Calculator from './components/DayTwo/Calculator/Calculator';
import Counter from './components/Counter/Counter';
// import PersonList from './pages/List/PersonList';

// About Guards Route 
const requireLogin = (to, from, next) => {
    if (to.meta.auth) {
        if (localStorage.token) {
            next();
        }
        next.redirect('/login');
    } else {
        next();
    }
};


const App = () => {
    return (
        <div className="App" >
            <>
                { /* <h1 className="text-primary bg-dark">This is first words from app.js</h1> */}
                { /* <First /> */}


                { /* <h1>This is first task about portfolio</h1> */}
                {/* <Main /> */}

                {/* <FunctionlTest /> */}

                {/* Day two about forms and manually validation  */}
                {/* <ManualForm /> */}
                {/* <TodoList /> */}
                {/* <Calculator /> */}
                {/* <Revision /> */}
                {/* <Todo /> */}


                {/* Day 3 about routing and axios */}
                <Router>
                    <GuardProvider guards={[requireLogin]}>
                        <NavBarComponent />
                        <Switch>
                            <Route path="/" exact component={TodoList} meta={{ auth: true }} />
                            <Route path="/calculator" exact component={Calculator} meta={{ auth: true }} />
                            <Route path="/login" exact component={ManualForm} />
                            <Route path="/counter" exact component={Counter} />
                        </Switch>
                    </GuardProvider>
                </Router>

                {/* <Router>
                    <NavBarComponent />
                    <Switch>
                        <PrivateRoute path="/">
                            <TodoList />
                        </PrivateRoute>
                    </Switch>
            </Router> */}


                {/* Day 3 About Routing And Call Api */}
                {/* <Router>
                <NavBarComponent />
                <Switch>
                    <Route path="/details/:id" >
                        <MovieDetails />
                    </Route>
                    <Route path="/">
                        <MoviesList />
                    </Route>
                </Switch>
                </Router> */}
            </>
        </div >
    );
}

export default App;


