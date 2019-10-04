import React, { Component } from "react";
import firebase from "./config/Fire";

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this)
    }

    logout() {
        firebase.auth().signOut()
    }

    render() {
        return (
            <div className="col-md-6">
                <h1>Hola Amor! Ya lo LOGRE! Te amo</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

export default Home;
