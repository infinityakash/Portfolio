import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Akash Joshi',
  subtitle: 'Graduate Student at Arizona State University',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Computer Science student at Arizona State University, looking for full time opportunity in the Software development industry.',
  paragraphTwo: '3 years of proven experience in full stack software development, data visualization and big data ecosystems. Deep understanding of Enterprise Resource Planning ecosystem and adept at dealing with customers and clients',
  paragraphThree: 'Experience in implementing Machine Learning algorithm and state of the art data mining techniques',
  resume: '', // if no resume, the button will not show up https://www.resumemaker.online/es.php
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'skymart.png',
    title: 'SkyMart - E Commerce Website',
    info: 'Developed using the MERN stack',
    info2: '',
    url: 'https://skymart.herokuapp.com/',
    repo: 'https://github.com/infinityakash/E-Commerce-Website', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Overview.png',
    title: 'Data Visualization Spatio Temporal Dashboard',
    info: '',
    info2: '',
    repo: 'https://github.com/infinityakash/VAST-2017-Mini-Challenge', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ajoshi37@asu.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'indeed',
      url: 'https://my.indeed.com/p/akashj-orp0p4q',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/akashjoshi11/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/infinityakash/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
