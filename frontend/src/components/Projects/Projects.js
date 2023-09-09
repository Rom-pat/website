import './Projects.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ProjectData  } from '../../data';
import ProjectTab from '../Project_tab/Project_tab';
import Popup from '../Popup/Popup';

class Projects extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activePopup: null,
        activeImage: null
      };
    }
    openPopup = (title, description, duration, stack, image, code, link) => {
      this.setState({
        activePopup: {title, description, duration, stack, code, link},
        activeImage: image
      });
    };
    closePopup = () => {
      this.setState({
        activePopup: null,
        activeImage: null
      });
    };
    componentDidMount() {
        document.title = `Project Section`;
      }
    render() {
      const { activePopup, activeImage } = this.state;

        return(<div id="Work">
          <Header />
					<h1 className='title'>Projects</h1>
					<h2 className=' text-4xl mx-auto'>Here a list of all the projects that I've worked on!</h2>
          <div id='Project'>
            {ProjectData.map((data) => {
              return (
              <ProjectTab title={data.title} description={data.description} 
              duration = {data.duration}
              stack  = {data.stack}
              image={data.image}
              link={data.link}
              code = {data.code}
              onClick={this.openPopup} 
              />
              )
            })}
          </div>
          {activePopup && (
          <Popup title={activePopup.title} description={activePopup.description}  duration = {activePopup.duration} 
          stack={activePopup.stack}
          image={activeImage} closePopup={this.closePopup} code={activePopup.code} link={activePopup.link}/>
        )}
          <Footer />
        </div>
        );
}
}

export default Projects; 


/*   constructor(props) {
    super(props);
    this.state = {
       appear : false;
    }
  } */