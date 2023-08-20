import './Projects.css';
import React from 'react';
import Header from '../Header/Header';
import p5 from '../../Photos/eecs485p5.png';
import colorize from '../../Photos/Colorize.png';
import Notetotes from '../../Photos/Notetotes.png';
import website from '../../Photos/Website.png';
import Poke_type from '../../Photos/Poke-type.png';
import Footer from '../Footer/Footer';
import ProjectTab from '../Project_tab/Project_tab';

class Projects extends React.Component {
    componentDidMount() {
        document.title = `Project Section`;
      }
    render() {
        return(<div id="Work">
          <Header />
					<h1 className=' text-5xl font-bold mx-auto mb-4'>Projects</h1>
					<h2 className=' text-4xl mx-auto'>Here a list of all the projects that I've worked on!</h2>
          <div id='Project'>
          <ProjectTab title={"Website"} image={website}/>
          <ProjectTab title={"Pokemon Discord Bot"} image={Poke_type}/>
          <ProjectTab title={"Notetotes"} image={Notetotes}/>
          <ProjectTab title={"Scalable Search Engine"} image={p5}/>
          <ProjectTab title={"Colorize"} image={colorize}/>
          <ProjectTab title={"Project 5"} image={p5}/>
          </div>
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