import "./assets/css/main.css";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import PrivateRoute from "./utils/PrivateRoute";
import Login from "./components/Login";
import SignUpForm from "./components/SignupForm";

function App() {


  return (
    <Router>
      <div className="App">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>Hi there - hungry?</h1>
              <h2>Youre in the right place!</h2>
            </header>
          </div>
        </section>

        <Switch>
        
          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/signup">
            <SignUpForm />
          </Route>

        </Switch>

        <footer id="footer">
          <ul className="copyright">
            <li>Potluck Planner &copy; Lambda School 2021</li>
            <li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
          </ul>
        </footer>
      </div>

    </Router>
  );
}

export default App;