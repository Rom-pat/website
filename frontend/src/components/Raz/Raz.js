import './Raz.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


class Raz extends React.Component {
    componentDidMount() {
        document.title = `Secret Raz Section`;
      }
    render() {
        return(<div className="Raz">
            <Header />
            <Footer />
        </div>
        );
}
}

export default Raz; 