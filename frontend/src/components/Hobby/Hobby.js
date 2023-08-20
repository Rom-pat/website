import './Hobby.css';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import waterfall from '../../Photos/Waterfall.jpeg';
class Interest extends React.Component {
    componentDidMount() {
        document.title = `Hobbies Section`;
      }
    render() {
        return(<div className="Interest">
          <Header />
          <h1 className='text-5xl place-self-center  font-bold p-5'>
            Hobbies
          </h1>
          <br></br>
          <article className=' pb-20'>
          <div className='w-full h-1/2 inline-block'>
          <div className='w-3/5 inline-block'>
            <p className='about-text'>
            The name is Romit! I am a recent University of Michigan graduate majoring in Computer Science and currently looking for work in the industry.      
            </p>  
            <p className='about-text'>
              My usual focus in the field has been in Web development, Machine Learning, Computer Vision and Databases but I'm currently learning mobile development with Swift
              and to build myself a Task organizing app and a Pokemon Collection app.
            </p>
            <p className='about-text'>
              When I'm not focusing on coding, I'm usually tending to my hobbies or  
            </p>   
            <p className='about-text'>
              My philosophy is to make sure I do at least one memorable action every single day, whether that be work or life oriented or 
              just self care. 
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

export default Interest; 