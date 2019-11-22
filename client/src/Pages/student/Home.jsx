import React, { Component } from 'react';
import FirstContact from '../../Components/Cards/FirstContact';
import FollowUp from '../../Components/Cards/FollowUp';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display: "none",
            firstContact: "none",
            followUp: "none"
        }
    }

    toggleContact = (e) => {
        if (e.target.value === "yes") {
            this.setState({ display: "block" });
        } else {
            this.setState({ display: "none" });
        }
    }

    firstContact = (e) => {
        if (e.target.value === "yes") {
            this.setState({ firstContact: "block" });
        } else if (e.target.value === "no") {
            this.setState({ followUp: "block" })
        } else {
            this.setState({ firstContact: "none", followUp: "none" });
        }
    }

    render() {
        return (
            <div>
                <h2>Made any new Connections?</h2>
                <form>
                    <section onClick={this.toggleContact}>
                        <label>
                            <input type="radio" name="new-employer" value="yes" />Yes
                        </label>
                        <br></br>
                        <label>
                            <input type="radio" name="new-employer" value="no" />No
                        </label>
                    </section>
                    <section style={{ display: this.state.display }} onClick={this.firstContact}>
                        <h3>Was this your first contact?</h3>
                        <label>
                            <input type="radio" name="new-employer" value="yes" />Yes
                        </label>
                        <br></br>
                        <label>
                            <input type="radio" name="new-employer" value="no" />No
                        </label>
                    </section>
                    <section>
                        <FirstContact display={this.state.firstContact} />
                        <FollowUp display={this.state.followUp} />
                    </section>
                </form>
            </div>
        )
    }
}
