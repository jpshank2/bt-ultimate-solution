import React, { Component } from 'react';
// import './styles/App.css';
import './styles/Style.css';
import Nav from './Components/Nav'

class App extends Component {
  render() {
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


      <React.Fragment>
        <Nav />
      </React.Fragment>
    )
  };
}

export default App;
