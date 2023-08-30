import Romit from '../../Photos/Romit.JPG';
import './Home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import React from 'react';


class Home extends React.Component {
  
    componentDidMount() {
        document.title = `Romit-Patel Website`;
      }
    render() {

        return(
        <div id="Home">
          <Header />
                <div id='home-body'>
                <div id="Text-info">
                  <p className='home_text'> 
                    Welcome to my Website! Here you will find a detailed summary
                    of my dive into the tech sphere.
                    <br></br>
                    Follow the links above to learn more about me!
                  </p>
                  </div>
                <div id='split_port'>
                <img src={Romit} id="Profile-Pic" alt="Myself"/>
                <div id="Home_text_next_to_pic">
                <h2>To give the rundown: </h2>
                <br></br>
                  <p className='home_text'>University of Michigan 2023 Graduate. B.S.E CS 〽️</p>
                  <p className='home_text'>Currently job-hunting for a Fast and Friendly Enviroment!</p>
                  <p className='home_text'>When I am not coding, you will find me trying to complete my <a className="a_links" href="/Hobby" target="_self">Hobbies</a> Page!</p>
                  <p className='home_text'>Want to connect? Feel free to do it <a className="a_links" href="/About">Here</a></p>
                </div>
                </div>
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