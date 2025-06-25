import './Hobby.css';
import React from 'react';

import Pokemon from '../../Photos/Pokemon.jpg';
import exercising from '../../Photos/exercising.png';
import Gujarati from '../../Photos/Gujarati.png';
import cooking from '../../Photos/cooking.png';

const HobbyData =[
  {
  "Title": "Catching Em All!",
  "Description": " During the peak of Covid, I decided to catch every pokemon as a gift for my little brother's 10th birthday. However, I decided the extra caveat would be that I would give him ALL of these pokemon in their alternate colors. The chance of finding one can range from 1/4096 to 1/8192. At the time of writing, we have managed to get 995/1,010 of all Pokemon. Missing only 2!(April 2025)!",
  "Image": Pokemon
},
  {
  "Title": "Working on Working out",
  "Description": "When I'm not taking care of my family or work, you can find me working out in the gym constantly! I am focusing on strengthing my upper body and core. You can also find me researching information on working out and figuring the optimal workout setup and calorie intake to acheive my current weight and muscle growth.",
  "Image": exercising
},
  {
  "Title": "Studying Languages",
  "Description": "Besides learning coding languages, I wanted to expand my ability to talk with people from different backgrounds! I wanted to know more about my Indian heritage and wanted to communicate more efficiently. I started learning how to speak and write in Hindi for this goal. Besides using English, I strongly know Spanish and Gujarati from School and Home. I also know a few individual words in Swahili and French from traveling.",
  "Image": Gujarati
},
  {
  "Title": "Cooking out",
  "Description": "During the start of my college time, I started learning how to cook more so I could provide myself with some healthy snacks and treats when going to the gym or doing some school work. I go on Youtube to research what food I should make and limit myself to vegetarian options.So far, I have been mostly making Indian food as the cuisine I'm learning but feel free to drop me any recipes.",
  "Image": cooking
}
]

export default function Hobby() {
  React.useEffect(() => {
    document.title = 'Hobbies Section';
    // Optional: Clean up function to reset title if needed
    return () => {
      document.title = 'Romit Patel';
    };
  }, []);
  return(
  <div className="Interest">
        <title>Hobbies Section</title>
    <h1 className='title p-5'>
      Hobbies
    </h1>
    <div className='pb-5'>
      {
        HobbyData.map((item, index) => (
          <div className='w-full max-h-fit inline-block pb-20' key={index}>
            <div className='w-3/5 inline-block'>
              <h3 className='hobby_title'>{item.Title}</h3>
              <p className='hobby_Text'>
                {item.Description}
              </p>
            </div>
            <div className='w-2/5 object-contain inline-block float-right'>
              <img src={item.Image} className=' w-auto h-65 bg-white' alt={item.Tsitle}></img>
            </div>
          </div>
        ))
      }
    </div>
  </div>
  );
}