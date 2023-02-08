import {FaReact} from 'react-icons/fa'
import {SiRuby, SiRubyonrails, SiJavascript, SiPostgresql, SiCss3, SiSqlite} from 'react-icons/si'

export const projects =[
    {
        title: 'Brewery Locator',
        image: '/images/Brew.png',
        description:
          "A web application to discover breweries and track the ones you have visited",
        repoLink: 'https://github.com/sassek70/Phase-1-Project',
        url: null,
        demoVideo: '',
        embedId: '',
        technologies: [<SiJavascript size={40}/>, <SiCss3 size={40}/>],
        tags: []
      },
      {
        title: 'Quarterback Stat Tracker',
        image: '/images/QBStatTracker.png',
        description:
          "Developed as a pair-programming project in React.js, this application allows a user to see the stats of the all active NFL Quarterbacks as of 10/24/2022.",
        repoLink: 'https://github.com/sassek70/phase-2-project',
        url: null,
        demoVideo: '',
        embedId: '',
        technologies: [<FaReact size={40}/>, <SiCss3 size={40}/>, ],
        tags: []
      },
      {
        title: 'Cookbook',
        image: '/images/Cookbook.png',
        description:
          "Developed using React.js, Ruby and utilizes Sinatra and a SQlite3 database.",
        repoLink: 'pending',
        url: null,
        demoVideo: '',
        embedId: '',
        technologies: [<FaReact size={40}/>, <SiRuby size={40}/>, <SiSqlite size={40}/>, <SiCss3 size={40}/>],
        tags: [`Sinatra`]
      },
      {
        title: 'Spotlight',
        image: '/images/Spotlight.png',
        description:
          "Pair-programming project developed with React.js and a Rails API. This event tracking application allows users to maintain a list of upcoming events.",
        repoLink: 'https://github.com/sassek70/Spotlight',
        url: null,
        demoVideo: '',
        embedId: '',
        technologies: [<FaReact size={40}/>, <SiRubyonrails size={40}/>, <SiSqlite size={40}/>, <SiCss3 size={40}/>],
        tags: []
      },
      {
        title: 'A Not So Magical Gathering',
        image: '/images/ANSMG.png',
        description:
          "This is my Flatiron School capstone project. 1v1 battle card game developed with React.js and Ruby on Rails, uses ActionCable to connect two players through websockets. Note: This application may take up to a minute to come online, the hosting service shutsdown the server after a period of inactivitiy. The Leaderboard page will be populated with users when the server is active.",
        repoLink: 'https://github.com/sassek70/A-Not-So-Magical-Gathering',
        url: `https://a-not-so-magical-gathering.onrender.com/home`,
        demoVideo: '',
        embedId: '',
        technologies: [<FaReact size={40}/>, <SiRubyonrails size={40}/>, <SiPostgresql size={40}/>],
        tags: [`ActionCable`, `Styled-Components`]
      },
    ]