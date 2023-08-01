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
          <Footer />
        </div>
        );
}
}

export default About; 