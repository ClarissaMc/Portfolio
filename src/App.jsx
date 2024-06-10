import * as React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './Header';
import { CurrentProject } from './CurrentProject';
import { Stats } from './Stats';
import { Navbar } from './Navbar';
import { Thumbnail } from './Thumbnail';

import home from './assets/home.png';
import stats from './assets/stats.png';
import working from './assets/woman-at-computer.png';

const App = () => {
  const aboutMe = "A passionate programmer with an insatiable desire to learn!";

  const tldr = "I'm using React to redesign my portfolio website!";
  const currentProject = (<p>Fresh off of completing <a href="https://www.amazon.com/dp/172004399X?psc=1&ref=ppx_yo2ov_dt_b_product_details" target="_blank"><em>
    The Road to React </em></a>by Robin Wieruch, I am applying my new React skills to recreating my <a href="https://clarissamc.github.io/MyWebsite/" target="_blank">
    portfolio website</a>!
    Initially, I had only used HTML, CSS, and the tiniest bit of JavaScript to cobble together my website. Despite having only created the website less than a 
    year ago, my new web dev knowledge already has me cringing at how rudimentary it is. The formatting of the About Me page is an eyesore and my new JavaScript 
    and React skills have me eager to add cleaner, attractive features, especially to my projects section.<br/><br/>In the current iteration of my portfolio website, 
    I decided to have all my information on a <span className='underline'>single page</span>, as I found having multiple pages a tad unnecessary. I am using React to 
    break down features of the
    website into components, creating far more <span className='underline'>organized and approachable code</span>. This is especially helpful for 
    my <span className='underline'>redesigned projects section</span>, which enables
    me to <span className='underline'>easily replicable</span> thumbnails and interactions for each of my projects. Ideally, I would also like to showcase my Node, Express, and MongoDB skills to
    have ready proof of my grasp of MERN. However, I don't currently see a useful way to include these skills without them being shoe-horned in unnecessarily.
    Regardless, I already have plenty of ideas for future projects to showcase those skills!
  </p>);

  const tabs = {
    Home: {
      name: "Home",
      linkTo: "#welcome_header",
      img: home,
      alt: "home",
    },
    Stats: {
      name: "Stats",
      linkTo: "#stats_section",
      img: stats,
      alt: "pie chart",
    },
    CurrentProject: {
      name: "Current Project",
      linkTo: "#current_proj_section",
      img: working,
      alt: "gear turning",
    },
  };

  return (
    <div className="myContainer">
      <Navbar tabs={tabs}/>

      <Header 
        id = "welcome_header"
        bgColor = "#0C359E"
        fontColor = "#F6F5F5"
        heading = "Hi, I'm Clarissa!"
        subHeading = {aboutMe}
      />

      <Stats
        id = "stats_section"
        langs = "5"
        skills = "10"
        projects = "8"
        courses = "8"
      />
      
      <CurrentProject
        id = "current_proj_section"
        tldr = {tldr}
        text = {currentProject}
      />
    </div>
  );
};

export default App;