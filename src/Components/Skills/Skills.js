import React, { useState } from "react";
import "./Skills.css";
import SkillComponent from "./SkillComponent";

const ActiveComponent = (activeSkill) => {
  if (activeSkill === "frameworks") {
    return (
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
      </div>
    );
  } else if (activeSkill === "tools") {
    return (
      <div className="skills__components">
        <SkillComponent
          name="Github"
          image="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png"
        />
        <SkillComponent
          name="Git"
          image="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
        />
        <SkillComponent
          name="Slack"
          image="https://static.surveysparrow.com/site/assets/integrations/inner/slack.png"
        />
        <SkillComponent
          name="Terminal"
          image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png"
        />
        <SkillComponent
          name="VS Code"
          image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png"
        />
        <SkillComponent
          name="MongoDB atlas"
          image="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_a0b9e371c09d15b9a0b48ed84b31ed35/mongodb-atlas.png"
        />
        <SkillComponent
          name="Visual Studio"
          image="https://img.icons8.com/color/452/visual-studio.png"
        />
        <SkillComponent
          name="Figma"
          image="https://cdn.freebiesupply.com/logos/large/2x/figma-1-logo-png-transparent.png"
        />
        <SkillComponent
          name="Postman"
          image="https://miro.medium.com/max/512/1*fVBL9mtLJmHIH6YpU7WvHQ.png"
        />
      </div>
    );
  } else if (activeSkill === "database") {
    return (
      <div className="skills__components">
        <SkillComponent
          name="MongoDB"
          image="https://img.icons8.com/color/452/mongodb.png"
        />
        <SkillComponent
          name="PostgresSQL"
          image="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png"
        />
        <SkillComponent
          name="mysql"
          image="https://e7.pngegg.com/pngimages/252/959/png-clipart-mysql-database-server-microsoft-sql-server-others-text-logo.png"
        />
      </div>
    );
  }
};

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState("frameworks");

  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills__title">
        <h3
          onClick={() => setActiveSkill("frameworks")}
          className={`${activeSkill === "frameworks" && "active"}`}
        >
          Frameworks/Library
        </h3>
        <h3
          className={`${activeSkill === "tools" && "active"}`}
          onClick={() => setActiveSkill("tools")}
        >
          Tools & Softwares
        </h3>
        <h3
          className={`${activeSkill === "database" && "active"}`}
          onClick={() => setActiveSkill("database")}
        >
          Databases
        </h3>
      </div>
      {console.log(activeSkill)}
      {ActiveComponent(activeSkill)}
    </div>
  );
};

export default Skills;
