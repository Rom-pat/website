import './Contact.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Github from '../../Photos/Github.png';
import Gmail from '../../Photos/Gmail_Logo.png';
import Linkedin from '../../Photos/Linkedin_photo.png';

class Contact extends React.Component {
    componentDidMount() {
        document.title = `Contact Section`;
      }
    render() {
        return(
        <div id="Contact">
            <Header />
             <h1 className='title'>Contact me</h1>
             <h3 className=' text-3xl'>You can find me on these website!</h3>
             <div className='top_portion'>
             <a href='https://github.com/Rom-pat' target='_blank' rel='noreferrer'> <img className='h-1/2' src={Github} alt="Github_link" /></a>
             <a href='https://www.linkedin.com/in/romit-patel-/' target='_blank' rel='noreferrer'><img className="h-1/2" src={Linkedin} alt="Linkedin"/> </a>
              </div>
              <h3 className=' text-3xl'>If you need to contact me, feel free to drop your info here!</h3>
              <form action='https://formsubmit.co/7fc99ecd5335f8826ba77fdadfa35959' method="POST">
              <input  className="text_input" type="text" id="fname" name="fname" placeholder="name"></input><br /> 
              <input className="text_input" type="email" id="email" name="email" placeholder="email"></input><br /><br />
              <textarea className="paragraph_input" placeholder='Description...' name='Description'></textarea><br /><br />
              <input className="main_form" id="submit_form" type="submit" value="Submit"></input>
              <input className="main_form" id="reset_form" type="reset" value="Reset"></input>
              </form>
             <Footer />
          </div>
          );
}
}

export default Contact;