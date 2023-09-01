import './Project_tab.css';
import React from 'react';

class Project_tab extends React.Component {
    handleClick = () => {
        const { title, description, duration, stack, image, code, link, onClick } = this.props;
        onClick(title, description, duration, stack, image, code, link);
      };
    
    render() { 
        return(
            <div className='project_Tabs'> 
            <button id="myButton" onClick={this.handleClick}>
                 <span className='project_details'>Details</span> 
                 <img src={this.props.image} alt={this.props.title} className='project-image'></img>  
            </button>
            <h3 className='project_title'>{this.props.title}</h3> 
            </div>);
    }
}

export default Project_tab;