
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { project_data } from "./proj_data";

import { useState, useRef, useContext } from "react";
import ProjectPage from "./ProjectPage";
import { AppContext } from "../App";

export const ProjTopicContext = React.createContext();

const Projects = () => {

  const val = useContext(AppContext);
  

  
  return (
    <>
     

      <Typography id="project" className='project-heading' variant="h3" component="h3" gutterBottom>
              Projects
      </Typography>

      <ProjectTopic topic_name="React Projects" projs={val.project_data.react} />
      <ProjectTopic topic_name="Django Projects" projs={val.project_data.django} />
    </>
  );
};

const ProjectTopic = (props) => {
  const { topic_name, projs } = props;

  const [projPage, setProjPage] = useState(false);
  const [currProj,setCurrProj] = useState(null  )

  const list = projs.map((proj) => {
    return (
      <span key={proj.id} className="card-body zoom">
        <CardComp
          proj= {proj}
          comp_id = {proj.id}
          setProjPage={setProjPage}
          setCurrProj= {setCurrProj}
          currProj={currProj}
          style={{ display: "inline" }}
          name={proj.name}
          url={proj.url}
          img={proj.img}
          desc={proj.description}
        />
        <br />
      </span>
    );
  });

  // returns the card list

  if (!projPage) {
    return (
      <span className="projects-container">
        <Typography variant="h5" align="center" gutterBottom>{topic_name}</Typography>
        {/* <h4 class="project-topic">{topic_name}</h4> */}

        <div className="projects-list">{list}</div>
      </span>
    );
  } else {
    return (
      <ProjTopicContext.Provider value={{ setProjPage, project_data,setCurrProj,currProj}}>
        <ProjectPage />
      </ProjTopicContext.Provider>
    );
  }
};

const CardComp = (props) => {
  const { setProjPage, setCurrProj,proj } = props;
  
  
  const handleDetails = (e) => {
    setProjPage(true)
    // console.log(proj)
    setCurrProj(proj)
    

  };
  const detailsCardRef = useRef();
  return (
    <Card ref={detailsCardRef} sx={{ maxWidth: 345 }}>
      <CardMedia style={{backgroundSize:'contain'}} sx={{ height: 165 }} image={props.img} title={props.name} />
      <CardContent>
        <Typography name="name"  gutterBottom variant="h5" component="div">
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
      </CardActions>
    </Card>
  );
};

export default Projects;
