import './Resume.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Projects extends React.Component {
    componentDidMount() {
        document.title = `Resume Section`;
      }
    render() {
        return(<div className="Resume">
          <Header />
          <Footer />
        </div>
        );
}
}

export default Projects; 