import Romit from '../../Romit.jpeg';

import './Home.css';
import React from 'react';


class Home extends React.Component {

    render() {
        return(<div className="Home">
        <title>
            Romit Website
        </title>
        <header className='Home-header'>
            <div className='dashboard'>
            <a
                className="App-link"
                href="/projects"
                target="_self"
                >
                Projects
                </a>
                <a
                className="App-link"
                href="/projects"
                target="_self"
                >
                Resume
                </a>
                <a
                className="App-link"
                href="/home"
                target="_self"
                >
                Romit Patel
                </a>
                <a
                className="App-link"
                href="/Interest"
                target="_self"
                >
                Interest
                </a>
                <a
                className="App-link"
                href="/about"
                target="_self"
                >
                About
                </a>
            </div>
            <img src={Romit} className="App-logo" alt="logo" />
        </header>
        <div>

        </div>
        </div>
        );
}
}

export default Home; 

/*
                <a
                className="App-link"
                href="/raz"
                target="_self"
                >
                Raz
                </a>
*/