import './About.css';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
class About extends React.Component {
    componentDidMount() {
        document.title = `About Section`;
      }
    render() {
        return(<div className="About">
          <Header />
          <h1 >
            About Me
          </h1>
          <p>
            The name is Romit! I am a Recent University of Michigan Graduate who majored in Computer Science and currently looking for work in the industry.
          </p>
          <Footer />
        </div>
        );
}
}

export default About; 