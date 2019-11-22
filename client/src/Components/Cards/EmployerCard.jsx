import React, { Component } from 'react'
import UpdateEmployer from './UpdateEmployer';

export default class EmployerCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employers: [],
            employer: 0
        }
    }

    updateInfo = (e) => {
        this.setState({employer: e.target.id})
        document.getElementsByClassName(e.target.id)[0].style.display = "block"
    }

    componentDidMount() {
        fetch("http://localhost:3001/employers")
            .then(res => res.json())
            .then(data => {
                let employers = data.data
                this.setState({ employers: employers })
            })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.employers.map(employer => {
                    return (
                        <div className="card" key={employer.id}>
                            <h2>{employer.company}</h2>
                            <p>{employer.contact}</p>
                            <p>{employer.method}</p>
                            <p>{employer.date}</p>
                            <button id={employer.id} onClick={this.updateInfo}>Update</button>
                            <UpdateEmployer class={employer.id} />
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }
}
