import React from "react";
import "./Skills.css";
import SkillComponent from "./SkillComponent";
const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills__components">
        <SkillComponent
          name="Javascript"
          image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
        />
        <SkillComponent
          name="ReactJS"
          image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
        />
        <SkillComponent
          name="Redux"
          image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png"
        />
        <SkillComponent
          name="NodeJS"
          image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
        />
        <SkillComponent
          name="MongoDB"
          image="https://img.icons8.com/color/452/mongodb.png"
        />
        <SkillComponent
          name="PostgresSQL"
          image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png"
        />
        <SkillComponent
          name="HTML"
          image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
        />
        <SkillComponent
          name="CSS"
          image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
        />
        <SkillComponent
          name="SASS"
          image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png"
        />
        <SkillComponent
          name="Bootstrap"
          image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png"
        />
        <SkillComponent
          name="MaterialUI"
          image="https://img.icons8.com/color/452/material-ui.png"
        />
        <SkillComponent
          name="Framer Motion"
          image="https://octocourses.com/static/7bcadc9ec2ba0513c32383ea8ff863c7/630fb/framer-motion.png"
        />
        <SkillComponent
          name="Python"
          image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"
        />
        <SkillComponent
          name="mysql"
          image="https://e7.pngegg.com/pngimages/252/959/png-clipart-mysql-database-server-microsoft-sql-server-others-text-logo.png"
        />
      </div>
      {/* <div className="skills__components">
        <SkillComponent image="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />
        <SkillComponent image="" />
        <SkillComponent image="" />
        <SkillComponent image="" />
        <SkillComponent image="" />
        <SkillComponent image="" />
        <SkillComponent image="" />
        <SkillComponent image="" />
        <SkillComponent image="" />
        <SkillComponent image="" />
        <SkillComponent image="" />
        <SkillComponent image="" />
        <SkillComponent image="" />
        <SkillComponent image="" />
        <SkillComponent image="" />
        <SkillComponent image="" />
        <SkillComponent image="" />
        <SkillComponent image="" />
      </div> */}
    </div>
  );
};

export default Skills;
