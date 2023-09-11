import './About.css';
import React from 'react';
import Footer from '../Footer/Footer';
import waterfall from '../../Photos/Waterfall.jpeg'
import Header from '../Header/Header';
class About extends React.Component {
    componentDidMount() {
        document.title = `About Section`;
      }
    render() {
        return(
        <div className="About">
          <title>About section</title>
          <Header />
          <h1 className='title'>
            About Me
          </h1>
          <br></br>
          <article className=' pb-20'>
          <div className='w-full h-1/2 inline-block'>
          <div className='w-3/5 inline-block'>
            <p className='about-text'>
            The name is Romit! I am a recent University of Michigan graduate majoring in Computer Science.
            I am also currently looking for work in the industry.
            </p>  
            <p className='about-text'> My big interest in computer science started when I initially played on my Gameboy. I would always research ways
            to hack my games and I soon started learning about machine code reading and inputting commands through game mechanics.
            Which would go on to spark my interest in researching the development steps toward my own game </p>
            <p className='about-text'>
            My usual field focus has been Web development, Machine Learning, Computer Vision, and Databases.
            However, I am currently learning mobile development with Swift to build myself a Task-organizing app and a Pokemon Collection app.
            </p>
            <p className='about-text'>
            Besides coding, I tend to my hobbies or research additional methods to improve my life quality.
            </p>   
            <p className='about-text'>
            My philosophy is to make sure I do at least one memorable action every single day, whether that be work or life-oriented or 
            just self-care.
            </p>                                                                          
          </div>
          <div className='w-2/5 h-1/3 inline-block float-right'>
              <img src={waterfall} className='waterfall' alt="Myself @ Niagara Falls" ></img>
            </div>
          </div>
          </article>
          <Footer />
        </div>
        );
}
}

export default About; 