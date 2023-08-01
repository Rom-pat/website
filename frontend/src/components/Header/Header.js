import './Header.css';
import React from 'react';
class Header extends React.Component {
    render() {
        return(
            <div className='header-div'>
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
            </div>

        )
}
}

export default Header; 