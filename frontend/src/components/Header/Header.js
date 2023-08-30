import './Header.css';
import React from 'react';
class Header extends React.Component {
    render() {
        return(
            <div id='header-div'>
            <div id='dashboard'>
            <ul className='horizontal_list'>
                <li> <a className="App-link" href="/projects" target="_self"> Projects</a>
                </li>
                <li><a className="App-link"  href="/resume" target="_self">Resume</a></li>
                <li><a className="App-link" href="/home" target="_self"> Home</a> </li>
                <li> <a className="App-link" href="/Hobby" target="_self" > Hobbies </a> </li>
                <li>
                <a className="App-link" href="/about" target="_self" > About </a></li>
            </ul>
            </div>
            </div>
        )
}
}

export default Header; 