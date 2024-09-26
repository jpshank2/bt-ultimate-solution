import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Student from '../Pages/student/Student'
import Employers from '../Pages/student/Employers'
// import './styles/Style.css';


class Nav extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <div class="container content-main">
                        <Route exact path="/" component={Student} />
                        <Route exact path="/employers" component={Employers} />
                    </div>
                </Switch>
            </Router>
        )
    }
}

export default Nav;