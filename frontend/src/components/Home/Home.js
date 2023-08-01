import Romit from '../../Romit.jpeg';
import './Home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import React from 'react';


class Home extends React.Component {
  
    componentDidMount() {
        document.title = `Romit-Patel Website`;
      }
    render() {

        return(<div className="Home">
          <Header />
                <div className='home-body'>
                <div className="Text-info">
                  <p> Hi! I'm a University of Michigan Alum</p>
                </div>
                <img src={Romit} className="App-logo" alt="logo" />
                </div>
          <Footer />
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