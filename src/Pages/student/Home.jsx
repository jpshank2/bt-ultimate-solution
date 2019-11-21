import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display: "none"
        }
    }

    toggle = (e) => {
        if (e.target.value === "yes") {
            this.setState({ display: "block" });
        } else {
            this.setState({ display: "none" });
        }
    }

    render() {
        return (
            <div>
                <h2>Talked to any new Employers?</h2>
                <form>
                    <section onClick={this.toggle}>
                        <label>
                            <input type="radio" name="new-employer" value="yes" />Yes
                        </label>
                        <br></br>
                        <label>
                            <input type="radio" name="new-employer" value="no" />No
                        </label>
                    </section>
                    <section style={{ display: this.state.display, margin: 20 }}>
                        <label className="form-label" htmlFor="company">What company?<span className="required">*</span> </label>
                        <input type="text" name="company" required /><br></br>
                        <label className="form-label" htmlFor="contact">Who did you talk to?<span className="required">*</span> </label>
                        <input type="text" name="contact" required /><br></br>
                        <input type="submit" value="Submit" />
                    </section>
                </form>
            </div>
        )
    }
}
