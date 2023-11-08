import { skills } from "./data";
import { useState } from "react";

const Skill = (props) => {
  const { url, name } = props;

  return (
    <>
      <img className="icon-handle zoom" src={url} alt={name} />
    </>
  );
};

const Skills = () => {
  const skillsList = skills.map((skill) => {
    return <Skill url={skill.url} name={skill.name} />;
  });


  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  
  return (
    <div className="skills-list">
      
      <h2 className={`subheading`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}>
        {/* {`${hovered ? 'I may have a few skills! ' : 'Skills!'}`} */}
        Skills
        <hr />
      </h2>
      {skillsList}
    </div>
  );
};

export default Skills;
