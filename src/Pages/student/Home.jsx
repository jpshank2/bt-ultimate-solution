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
                <h2>Made any new Connections?</h2>
                <form>
                    <div className="row">
                        <div className="col-5 radio-buttons div-shadow padded">
                            <section onClick={this.toggle}>
                                <label>
                                    <input type="radio" name="new-employer" value="yes" />&nbsp;&nbsp;Yes
                                </label>
                                <br></br>
                                <label>
                                    <input type="radio" name="new-employer" value="no" />&nbsp;&nbsp;No
                                </label>
                            </section>
                        </div>
                    </div>
                    <div style={{ display: this.state.display }} className="row">
                        <div className="col-5 div-shadow padded radio-buttons">
                            <section>
                                <label className="form-label" htmlFor="company">What company?<span className="required">*</span> </label><br />
                                <input type="text" name="company" required /><br></br>
                                <label className="form-label" htmlFor="contact">Who did you talk to?<span className="required">*</span> </label><br />
                                <input type="text" name="contact" required /><br></br><br />
                                <input type="submit" value="Submit" class="btn-box" />
                            </section>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
