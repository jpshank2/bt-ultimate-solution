  import React, { Component } from 'react'
import EmployerCard from '../../Components/Cards/EmployerCard'

export default class Employers extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>
                    These are your connections
                </h1>
                <div className="test">
                    <EmployerCard />
                </div>
            </React.Fragment>
        )
    }
}