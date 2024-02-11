import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { Box } from "@mui/material";
import { useState, useRef, useContext } from "react";
import ProjectPage from "./ProjectPage";
import { AppContext } from "../App";
import { useMediaQuery, Grid } from "@mui/material";

export const ProjectContext = React.createContext();
const Projects = () => {
  const [projPage, setProjPage] = useState(false);
  const [currProj, setCurrProj] = useState(null);
  const val = useContext(AppContext);
  return (
    <ProjectContext.Provider
      value={{ projPage, setProjPage, currProj, setCurrProj }}
    >
      <Typography
        id="project"
        className="project-heading"
        variant="h3"
        component="h3"
        gutterBottom
        sx={{ fontFamily: "Roboto, sans-serif" }}
      >
        Projects
      </Typography>

      {projPage && currProj.type === "react" ? (
        <ProjectPage />
      ) : (
        <Box sx={{ display: "flex", justifyContent: "around" }}>
          <ProjectTopic
            topic_name="React Projects"
            projs={val.project_data.react}
          />
        </Box>
      )}

      {projPage && currProj.type === "django" ? (
        <ProjectPage />
      ) : (
        <Box sx={{ display: "flex", justifyContent: "around" }}>
          <ProjectTopic
            topic_name="Django Projects"
            projs={val.project_data.django}
          />
        </Box>
      )}
    </ProjectContext.Provider>
  );
};

const ProjectTopic = (props) => {
  const { topic_name, projs } = props;
  const isMediumScreenOrLess = useMediaQuery((theme) =>
    theme.breakpoints.down("md")
  );

  const { setProjPage, currProj, setCurrProj } = useContext(ProjectContext);

  const list = projs.map((proj) => {
    return (
      <span key={proj.id} className="card-body zoom">
        <CardComp
          proj={proj}
          comp_id={proj.id}
          setProjPage={setProjPage}
          setCurrProj={setCurrProj}
          currProj={currProj}
          style={{ display: "inline" }}
          name={proj.name}
          url={proj.url}
          img={proj.img[0]}
          desc={proj.description}
        />
        <br />
      </span>
    );
  });
  // returns the card list

  return (
    <Grid
      container
      direction="column"
      alignItems={isMediumScreenOrLess ? "center" : "flex-start"} // Align topic_name centered on smaller screens, flex-start on larger screens
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontFamily: "Roboto, sans-serif",
          padding: isMediumScreenOrLess ? "0" : "15px 0", // Apply padding conditionally based on screen size
          margin: isMediumScreenOrLess ? "0" : "15px 0",
        }}
      >
        {topic_name}
      </Typography>

      <div className="projects-list">{list}</div>
    </Grid>
  );
};

const CardComp = (props) => {
  const { proj } = props;

  const value = useContext(ProjectContext);

  const { setProjPage, setCurrProj } = value;

  const handleDetails = () => {
    setProjPage(true);
    setCurrProj(proj);
  };
  const detailsCardRef = useRef();
  return (
    <Card ref={detailsCardRef} sx={{ maxWidth: 345, padding: 1 }}>
      <CardMedia
        style={{ backgroundSize: "contain" }}
        sx={{ height: 165 }}
        image={props.img}
        title={props.name}
      />
      <CardContent>
        <Typography name="name" gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={props.url} size="small">
          Code
        </Button>
        {/* <Button size="small">Visit</Button> */}
        <Button size="small" onClick={handleDetails}>
          Details
        </Button>
        {proj.link && (
          <Button size="small" href={proj.link}>
            Visit
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Projects;
