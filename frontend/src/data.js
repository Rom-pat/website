import p5 from './Photos/eecs485p5.png';
import colorize from './Photos/Colorize.png';
import Notetotes from './Photos/Notetotes.png';
import website from './Photos/Website.png';
import Poke_type from './Photos/Poke-type.png';
import Pokebase from './Photos/Pokebase.png';

export const ProjectData = [
    {
        title: "Pokebase",
        image: Pokebase,
        duration: "September 2023-Present",
        stack: "Swift, CocoaPods, iOS",
        description: "Developed my first iOS for the use of tracking alternate Colored Pokemon" +
        " and track when pokemon were found and how many are still need to be caught",
        code: true,
        link: "https://github.com/Rom-pat/PokeBase",
    },
    {
        title: "Website",
        image: website,
        duration: "July 2023-Present",
        stack: "Javascript and React",
        description: "Developed my first Website to display all my projects. Currently 1.0 of the website",
        code: true,
        link: "https://github.com/Rom-pat/website",
    },
    {
        title: "Pokemon Discord Bot",
        image: Poke_type,
        duration: "January 2023-Present",
        stack: "Python, Discord Framework, MongoDB, SQL, CSS3, HTML",
        description: "Created a python bot that would the simulate the catching portion of Pokemon \n alongside allowing users to easily access" +
        " 310,762 different pokemon type combinations",
        code: false,
    },
    {
        title: "Notetotes",
        image: Notetotes,
        duration: "September 2022-December 2022",
        stack: "Python, HTML5, CSS3, AWS, SQL, JavaScript",
        description: "Assembled a full stack writing app catered and specialized for writers and Ph.D. students by "+
        "partnering with two other developers.",
        code: false,
    },
    {
        title: "Scalable Search Engine",
        image: p5,
        duration: "March 2022- April 2023",
        stack: "Python, HTML5, CSS3, Javascript, Bash, SQL, AWS, Hadoop",
        description: "Developed a scalable search engine that retrieves wiki articles utilizing the Pagerank algorithm with Hadoop and MapReduce.",
        code: false,
    },
    {
        title: "Colorize",
        image: colorize,
        duration: "April 2023",
        stack: "Python, Pytorch, Numpy, Pandas, Mathlib",
        description: "Developed a neural network script that would take grayscale images and produced a color mapping to match the original photos with"+
        " two other developers",
        code: false,
    },
]

/*
    {
        title: "Pokemon Discord bot",
        image: Poke_type,
        duration: "May 2023-August 2023",
        stack: "Javascript and React",
        description: "Website being made",
        code: true,
    },
*/