import './Hobby.css';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Pokemon from '../../Photos/Pokemon.jpg';
import exercising from '../../Photos/exercising.png';
import Gujarati from '../../Photos/Gujarati.png';
import cooking from '../../Photos/cooking.png';
class Interest extends React.Component {
    componentDidMount() {
        document.title = `Hobbies Section`;
      }
    render() {
        return(<div className="Interest">
          <Header />
          <h1 className='title p-5'>
            Hobbies
          </h1>
          <br></br>
          <div className='pb-20'>

          <div className='w-full max-h-fit inline-block pb-20'>
          <div className='w-3/5 inline-block'>
            <h3 className='hobby_title'>Catching Em All!</h3>
            <p className='hobby_Text'>
            During the peak of Covid, I decided to catch every pokemon as a gift for my little brother's 10th birthday.<br></br>
            However, I decided the extra caveat would be that I would give him <b> ALL </b> of these pokemon in their alternate colors. The chance of finding one can range from 1/4096 to 1/8192.
            At the time of writing, we have managed to get 816/1,010 of all Pokemon (August 2023)!
            </p>
          </div>
          <div className='w-2/5 object-contain inline-block float-right'>
              <img src={Pokemon} className=' w-auto h-65'alt="Pokemon" ></img>
            </div>
          </div>

          <div className='w-full max-h-fit inline-block pb-20'>
          <div className='w-3/5 inline-block'>
            <h3 className='hobby_title'>Working on Working out</h3>
            <p className='hobby_Text'>
              When I'm not taking care of my family or work, you can find me working out in the gym constantly!
              <br></br>
              I am focusing on strengthing my upper body and core. You can also find me researching information on working out and figuring the optimal workout setup 
              and calorie intake to acheive my current weight and muscle growth. Currently, I am increasing my food intake to bulk.
            </p>
          </div>
          <div className='w-2/5 object-contain inline-block float-right'>
          <img src={exercising} className=' w-auto h-65  bg-white'alt="exercising" ></img>
            </div>
          </div>

          <div className='w-full max-h-fit inline-block pb-20'>
          <div className='w-3/5 inline-block'>
            <h3 className='hobby_title'>Studying Langagues</h3>
            <p className='hobby_Text'>
            Besides learning Coding languages, I wanted to expand my ability to talk with people from different backgrounds!<br></br>
            I wanted to know more about my Indian heritage and wanted to communicate more efficiently. I started learning how to speak and write in Hindi for this goal. 
            Besides using English, I strongly know Spanish and Gujarati from School and Home.
            I also know a few individual words in Swahili and French from traveling.
            </p>
          </div>
          <div className='w-2/5 object-contain inline-block float-right'>
          <img src={Gujarati} className=' w-auto h-65 bg-white'alt="Gujarati" ></img>
            </div>
          </div>

          <div className='w-full max-h-fit inline-block pb-20'>
          <div className='w-3/5 inline-block'>
            <h3 className='hobby_title'>Cooking out</h3>
            <p className='hobby_Text'>
              During the start of my college time, I started learning how to cook more so I could provide myself with some healthy snacks and treats when going to the gym 
              or doing some school work. 
              I go on Youtube to research what food I should make and limit myself to vegetarian options.
              So far, I have been mostly making Indian food as the cuisine I'm learning but feel free to drop me any <a className="a_links" href="/Contact">recipes</a>!
            </p>
          </div>
          <div className='w-2/5 object-contain inline-block float-right'>
          <img src={cooking} className=' w-auto h-65 mx-auto bg-white'alt="cooking" ></img>
            </div>
          </div>
          </div>
          <Footer />
        </div>
        );
}
}

export default Interest; 