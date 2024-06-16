import python from './assets/python.png';
import java from './assets/java.png';
import c from './assets/c-programming.png';
import r from './assets/r-programming.png';
import sql from './assets/sql.png';
import html from './assets/html.png';
import css from './assets/css.png';
import js from './assets/javascript.png';
import mongodb from './assets/mongodb.png';
import express from './assets/express.png';
import react from './assets/react.png';
import node from './assets/node.png';

const allSkills = {
    Python: python,
    Java: java,
    C: c,
    R: r,
    SQL: sql,
    HTML: html,
    CSS: css,
    JavaScript: js,
    MongoDB: mongodb,
    Express: express,
    React: react,
    Node: node,
};

const Thumbnail = (project) => {
    let classes = "thumbnail-container";

    for (var skill in project.skills)
        classes += " " + skill;

    return (
        <div className={classes}>
            <div className="thumb-img-div">
               <img src={project.image} className="thumbnail-image" alt={project.alt}/>
            </div>
            {   project.skills && (
                project.skills.map((item) => (
                    <div key={item} className="skills-div">
                        <img src={allSkills[item]} 
                            className="skill-icon"
                            alt={item}
                        />
                    </div>
                )))
            }
            <h3>{project.title}</h3>
        </div>
    );
};

export { Thumbnail };