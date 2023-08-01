import './Interest.css';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
class Interest extends React.Component {
    componentDidMount() {
        document.title = `Interest Section`;
      }
    render() {
        return(<div className="Interest">
          <Header />
          <Footer />
        </div>
        );
}
}

export default Interest; 