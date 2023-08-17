import './Projects.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Projects extends React.Component {
    componentDidMount() {
        document.title = `Project Section`;
      }
    render() {
        return(<div className="Pokemon">
          <Header />
          <Footer />
        </div>
        );
}
}

export default Projects; 