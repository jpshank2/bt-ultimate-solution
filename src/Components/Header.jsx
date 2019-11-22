import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import "../styles/Style.css"

const logoLink = {
    display: "block", height: "100%"
}

class Header extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container-fluid header">
                <div className="row">
                    <div className="col-3 logoDiv" onclick="location.href='/'">
                        <a style={logoLink} href="/">&nbsp;</a>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-7">
                        <div className="navbar navbar-light  navbar-expand-lg">
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><Link className="nav-link" to="/">HOME</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/employers">EMPLOYERS</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/applied">APPLIED</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/interviews">INTERVIEWS</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/offer">OFFERS</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/current-position">CURRENT POSITION</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header
