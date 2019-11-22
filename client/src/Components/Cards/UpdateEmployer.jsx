import React, { Component } from 'react'

export default class UpdateEmployer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            holder: "yo"
        }
    }
    render() {
        return (
            <div className={this.props.class} style={{display: "none"}}>
                <h3>Test</h3>
                <form>
                    <label>
                        <input type="text" name="contact" />
                    </label>
                </form>
            </div>
        )
    }
}
