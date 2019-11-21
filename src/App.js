import React from 'react';
import { BrowserRouter as Router, Route, /*Link*/ } from 'react-router-dom'
import './App.css';
// import Employer from './Pages/Employer';
import Student from './Pages/student/Student';
import Employers from './Pages/student/Employers';
import Nav from './Components/Nav';

function App() {
  return (
    /* <Router>
      <Route exact path="/" render={() => (
        <React.Fragment>
          <h1>Are you a:</h1>
          <Link to="/employer">Employer</Link>
          <Link to="/student">Student</Link>
        </React.Fragment>
      )} />
      <Route exact path="/employer" render={() => (
        <Employer />
      )} />
      <Route exact path="/student" render={() => (
        <Student />
      )} />
    </Router> */
    <Router>
      <Nav />
      <Route exact path="/" render={() => (
        <React.Fragment>
          <Student />
        </React.Fragment>
      )} />
      <Route exact path="/employers" render={() => (
        <Employers />
      )} />
    </Router>
  );
}

export default App;
