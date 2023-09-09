import p5 from './Photos/eecs485p5.png';
import colorize from './Photos/Colorize.png';
import Notetotes from './Photos/Notetotes.png';
import website from './Photos/Website.png';
import Poke_type from './Photos/Poke-type.png';

export const ProjectData = [
    {
        title: "Website",
        image: website,
        duration: "July 2023-September 2023",
        stack: "Javascript and React",
        description: "Developed my first Website to display all my projects. Currently 1.0 of the website",
        code: true,
        link: "https://github.com/Rom-pat/website",
    },
    {
        title: "Pokemon Discord bot",
        image: Poke_type,
        duration: "Janurary 2023-May 2023",
        stack: "Python, Discord Framework, MongoDB, SQL, CSS3, HTML",
        description: "Created a python bot that would the simulate the catching portion of Pokemon \n alongside allowing users to easily access" +
        " 310,762 different pokemon type combinations",
        code: false,
    },
    {
        title: "Notetotes",
        image: Notetotes,
        duration: "September 2022-Decemeber 2022",
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