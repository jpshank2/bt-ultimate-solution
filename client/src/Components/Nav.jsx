import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <nav className="student-nav">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/employers">Employers</Link>
                <Link className="link" to="/applied">Jobs Applied</Link>
                <Link className="link" to="/interviews">Interviews</Link>
                <Link className="link" to="/offers">Offers</Link>
                <Link className="link" to="/current-position">Current Position</Link>
            </nav>
        )
    }
}
