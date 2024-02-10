import { skills } from "./data";
import { Typography } from "@mui/material";

const Skills = () => {
  const skillsList = skills.map((skill) => {
    return <Skill key={skill.name} url={skill.url} name={skill.name} />;
  });

  return (
    <div className="skills-list">
      <Typography
        className="subheading"
        variant="h3"
        component="h3"
        gutterBottom
        sx={{ fontFamily: "Roboto, sans-serif" }}
      >
        Skills
      </Typography>

      {skillsList}
    </div>
  );
};

const Skill = (props) => {
  const { url, name } = props;

  return (
    <>
      <img
        style={{ maxWidth: "48px" }}
        className="icon-handle zoom"
        src={url}
        alt={name}
      />
    </>
  );
};

export default Skills;
