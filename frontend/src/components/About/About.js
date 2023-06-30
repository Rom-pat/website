import logo from '../../logo.svg';
import './About.css';
import React from 'react';


class About extends React.Component {

    render() {
        return(<div className="About">
        <header className="About-header">
        <h1>
            About
        </h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Lol
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
        </div>
        );
}
}

export default About; 