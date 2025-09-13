import React from 'react'
import './home.css'
import home_img from './Tech_home.png';

const subjects = [
  { name: "Computing", url: "https://en.wikibooks.org/wiki/Subject:Computing" },
  { name: "Engineering", url: "https://en.wikibooks.org/wiki/Subject:Engineering" },
  { name: "Science", url: "https://en.wikibooks.org/wiki/Subject:Science" },
  { name: "Mathematics", url: "https://en.wikibooks.org/wiki/Subject:Mathematics" },
  { name: "Programming", url: "https://en.wikibooks.org/wiki/Subject:Programming" },
  { name: "Web development", url: "https://en.wikibooks.org/wiki/Subject:Web_development" },
  { name: "Data Science", url: "https://en.wikibooks.org/wiki/Subject:Data_Science" },
  { name: "Artificial Intelligence", url: "https://en.wikibooks.org/wiki/Subject:Artificial_Intelligence" },
  { name: "Cybersecurity", url: "https://en.wikibooks.org/wiki/Subject:Cybersecurity" },
  { name: "Networking", url: "https://en.wikibooks.org/wiki/Subject:Networking" },
  { name: "Databases", url: "https://en.wikibooks.org/wiki/Subject:Databases" },
  { name: "Operating Systems", url: "https://en.wikibooks.org/wiki/Subject:Operating_Systems" },
  { name: "Software Development", url: "https://en.wikibooks.org/wiki/Subject:Software_Development" },
  { name: "Hardware", url: "https://en.wikibooks.org/wiki/Subject:Hardware" },
  { name: "Electronics", url: "https://en.wikibooks.org/wiki/Subject:Electronics" },
  { name: "Robotics", url: "https://en.wikibooks.org/wiki/Subject:Robotics" },
  { name: "Mobile Development", url: "https://en.wikibooks.org/wiki/Subject:Mobile_Development" },
  { name: "Cloud Computing", url: "https://en.wikibooks.org/wiki/Subject:Cloud_Computing" },
  { name: "DevOps", url: "https://en.wikibooks.org/wiki/Subject:DevOps" },
  { name: "Game Development", url: "https://en.wikibooks.org/wiki/Subject:Game_Development" },
  // { name: "All subjects", url: "https://en.wikibooks.org/wiki/Subjects"},
];

// Split subjects into two columns
const leftSubjects = subjects.slice(0, 10);
const rightSubjects = subjects.slice(10, 20);

const Home = () => {
  return (
    <>
      <h1 className='heading'>Welcome to TechPedia</h1>
      <div className='home-flex'>
        <img src={home_img} alt="TechPedia" className='home-image' />
      <div className="subjects-columns">
          <ul>
            {leftSubjects.map((subject, idx) => (
              <li key={idx}>
                <a
                  href={subject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {subject.name}
                </a>
              </li>
            ))}
          </ul>
          <ul>
            {rightSubjects.map((subject, idx) => (
              <li key={idx}>
                <a
                  href={subject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {subject.name}
                </a>
              </li>
            ))}
          </ul>
        </div>  
      </div>
    </>
  )
}

export default Home