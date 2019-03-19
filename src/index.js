import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './stylesheets/style.css';
import * as serviceWorker from './serviceWorker';
import { render } from "react-dom";
import {BrowserRouter, Route, Link} from "react-router-dom";

// const Home = () => <div> Home </div>;
// const About = () => <div> About </div>;
// const Contact = ({match}) => <div>{match.url}</div>;

const App = () => (
    <BrowserRouter>
        <section className="first">
            <form className="signupForm">
                <header>
                    <h2>Get Started</h2>
                    <hr/>
                    <p>first step towards innovation</p>
                </header>
                    <div className="wrapper">   
                        <div className="content">
                            <div className="input_field">
                                <label>User Name:</label>
                                <input type="text" name="uname" placeholder="Enter User Name"></input>
                            </div>
                            <div className="input_field">
                                <label>User Id:</label>
                                <input type="email" name="email" placeholder="Enter User Id"></input>
                            </div>
                            <div className="input_field">
                                <label>Password:</label>
                                <input type="password" name="pass" placeholder="Enter Password"></input>
                            </div>
                            <div className="input_field">
                                <label>Confirm Password:</label>
                                <input type="password" name="pass" placeholder="Enter Password"></input>
                            </div>
                            <button type="submit">Sign up</button>
                        </div> 
                    </div>
            </form>
        </section>
    </BrowserRouter>
);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
