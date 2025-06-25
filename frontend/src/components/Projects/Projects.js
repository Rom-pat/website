import './Projects.css';
import './Project_tab.css';
import './Popup.css';
import React, { useState, useEffect } from 'react';
import { ProjectData  } from './data';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';

export function Popup({project, handleCancel, isModalOpen}) {
  console.log('Popup component props:', project); // Debugging
  if (!project) {
    return null;
  }
  const { title, image, duration, stack, description, code, link } = project;
  console.log('Open:', isModalOpen); // Debugging
  return (
    <Modal
      open={isModalOpen}
      onClose={handleCancel}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ width: 1000 }} className="popup">
        <button className='close' onClick={handleCancel}>
          <span>X</span>
        </button>
        <div className="popup-content-container">
          <div className="popup-image">
            <img src={image} alt={title} className="popup-image-full" />
          </div>
          <div className="popup-text">
            <h1 className=' text-7xl left-0 text-left mt-2 '> {title} </h1>
            <p className='input-box '>{duration}</p>
            <p className='input-box '>{stack}</p>
          </div>
        </div>
        <div className="popup-text-bottom">
          {code ? (
            <a href={link} target="_self">
              <button className='github' id="github_available">
                Github available
              </button>
            </a>
          ) : (
            <button className='github' id="github_NA">
              Contact for Code
            </button>
          )}
          <div className="text-box">
            <p>{description}</p>
          </div>
        </div>
      </Box>
    </Modal>
  )
}

export function ProjectTab( {project, onShowModal} ) {
  const {title, image} = project
return(
    <div className='project_Tabs'> 
    <button id="myButton" onClick={() => {
        onShowModal(project)
    }}>
            <span className='project_details'>Details</span> 
            <img src={image} alt={title} className='project-image'></img>  
    </button>
    <h3 className='project_title'>{title}</h3> 
    </div>
);
}

export default function Projects() {
    useEffect(() => {
      document.title = 'Project Section';
      // Optional: Clean up function to reset title if needed
      return () => {
        document.title = 'Romit Patel';
      };
    }, []);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const handleShowModal = (project) => {
      console.log('Opening modal for project:', project); // Debugging
      setSelectedProject(project);
      setIsModalOpen(true);
    }
    const handleCancel = () => {
      setIsModalOpen(false);
      setSelectedProject(null);
    };
  return( 
    <div id="Work">
      <h1 className='title'>Projects</h1>
      <h2 className=' text-4xl mx-auto'>Here is a list of all the projects that I've worked on!</h2>
      <div id='Project'>
        {ProjectData.map((project) => (
          <ProjectTab project={project}
          key={project.title}
          onShowModal={handleShowModal}
          />
        ))}
      </div>
      <Popup project={selectedProject} handleCancel={handleCancel} isModalOpen={isModalOpen} />
    </div>
  ) 
}