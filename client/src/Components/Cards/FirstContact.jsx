import React, { Component } from 'react'

export default class FirstContact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            company: "",
            contact: "",
            method: "",
            date: "",
        }
    }

    handleSubmit = (e) => {
        // e.preventDefault();
        fetch("http://localhost:3001/employers", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                company: this.state.company,
                contact: [this.state.contact],
                method: this.state.method,
                date: this.state.date,
                id: ""
            })
        })
    }

    company = (e) => {
        this.setState({ company: e.target.value })
    }

    contact = (e) => {
        this.setState({ contact: e.target.value })
    }

    method = (e) => {
        this.setState({ method: e.target.value })
    }

    date = (e) => {
        this.setState({ date: e.target.value })
    }

    render() {
        return (
            <section style={{ display: this.props.display, margin: 20 }}>
                <div className="col-5 div-shadow padded radio-buttons">
                <label className="form-label" htmlFor="company">What company?<span className="required">*</span>
                    <input type="text" name="company" required onChange={this.company} />
                </label><br></br>
                <label className="form-label" htmlFor="contact">Who did you talk to?<span className="required">*</span>
                    <input type="text" name="contact" required onChange={this.contact} />
                </label><br></br>
                <label htmlFor="how" className="form-label" onClick={this.method}>How did they contact you?<span className="required">*</span>
                    <label className="form-label">
                        <input type="radio" name="how" value="Email" required />Email
                            </label><br></br>
                    <label className="form-label">
                        <input type="radio" name="how" value="Phone Call" />Phone Call
                            </label><br></br>
                    <label className="form-label">
                        <input type="radio" name="how" value="In Person" />In Person
                            </label><br></br>
                    <label className="form-label">
                        <input type="radio" name="how" value="LinkedIn" />LinkedIn
                            </label><br></br>
                </label><br></br>
                <label htmlFor="when" className="form-label" onChange={this.date}>When did they contact you?<span className="required">*</span>
                    <input type="date" name="when" required />
                </label><br></br>
                <input type="submit" value="Submit" onClick={this.handleSubmit} />
                </div>
            </section>
        )
    }
}
