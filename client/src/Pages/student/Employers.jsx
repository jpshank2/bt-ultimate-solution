import React, { Component } from 'react'

export default class Employers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employers: []
        }
    }
    componentDidMount() {
        fetch("http://localhost:3001/employers")
            .then(res => res.json())
            .then(data => {
                let employers = data.data.map(employer => {
                    return (
                        <div key={employer.id}>
                            <h2>{employer.company}</h2>
                            <p>{employer.contact}</p>
                            <p>{employer.method}</p>
                            <p>{employer.date}</p>
                        </div>
                    )
                })
                this.setState({ employers: employers })
            })
    }
    render() {
        return (
            <div>
                <h1>
                    These are the employers you've talked to
                </h1>
                {this.state.employers}
            </div>
        )
    }
}
