import logo from '../../logo.svg';
import './Raz.css';
import React from 'react';


class Raz extends React.Component {

    render() {
        return(<div className="Raz">
        <title>
            Romit Website
        </title>
        <header className="Raz-header">
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

export default Raz; 