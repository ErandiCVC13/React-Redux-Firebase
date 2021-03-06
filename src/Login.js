import React, { Component } from "react";
import firebase from "./config/Fire";



class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.signup = this.signup.bind(this)

        this.state = {
            email: "",
            password: ""
        };
    }

    login(e) {

        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {

        }).catch((error) => {
            console.log(error);

        });
    }

    signup(e) {

        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            console.log(error);

        });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="col-md-6">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail">Email Address</label>
                        <input
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            name="email"
                            className="form-control"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                        />
                        <small id="emailHelp" className=" form-text text-muted">
                            We'll never share your email with anyone else
            </small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword">Password </label>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            name="password"
                            className="form-control"
                            id="exampleInputPassword"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={this.login}
                        className="btn btn-primary"
                    >
                        Login
          </button>
                    <button
                        onClick={this.signup}
                        style={{ marginLeft: "25px" }}
                        className="btn btn-success"
                    >
                        SignUp
          </button>
                </form>
            </div>
        );
    }
}

export default Login;
