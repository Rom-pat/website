import logo from '../../logo.svg';
import './Projects.css';
import React from 'react';


class Work extends React.Component {

    render() {
        return(<div className="Work">
        <title>
            Romit Website
        </title>
        <header className="Work-header">
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

export default Work; 