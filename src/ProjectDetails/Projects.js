// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';

// import { useState } from 'react';

// const project_data = {

//   react:[
//     {
//       id:1,
//       name:"Portfolio site",
//       url:"https://github.com/pp2903/Portfolio-site",
//       img:"./pictures/Portfolio_site.png"
//     }

//   ],

//   django:[
//     {
//       id:1,
//       name:"Django CRM",
//       url:"https://github.com/pp2903/DjangoCRM",
//       img:"./pictures/DjangoCRM.png"
//     },
//     {
//       id:2,
//       name:"Mark's Pizzeria",
//       url:"https://github.com/pp2903/Mark-s-Pizzeria/tree/test",
//       img:"./pictures/MP.png"
//     },
//   ]

// }

// const Projects = () => {
//   return (
//     <>
//      <h2 className="project-heading">Projects</h2>

//     <ProjectTopic topic_name="React Projects" projs={project_data.react} />
//     <ProjectTopic topic_name="Django Projects" projs={project_data.django} />

//     </>

//   )
// }

// const ProjectTopic = (props)=>{
//   const  { topic_name, projs } = props

//   const list = projs.map((proj)=>{
//     return <span key={proj.id} className='card-body zoom'>
//      <CardComp style={{display:'inline'}} name={proj.name} url={proj.url} img={proj.img}/>
//      <br/>
//     </span>

//   })

//   return <span>

//     <h4>{topic_name}</h4>

//     <div>{list}</div>

//   </span>
// }

// const CardComp = (props)=>{

//   const [card,setCard] = useState(false)
//   const handleCard = ()=>{
//     if(card) setCard(false)
//     else setCard(true)

//   }

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 165 }}
//         image={props.img}
//         title={props.name}      />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//         {props.name}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button href={props.url} size="small">Code</Button>
//         <Button size="small" >Visit</Button>
//         <Button size="small" >Details</Button>
//       </CardActions>
//     </Card>
//   );
// }

// export default Projects

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { project_data } from "./proj_data";

import { useState, useRef } from "react";
import ProjectPage from "./ProjectPage";

export const ProjTopicContext = React.createContext();

const Projects = () => {
  return (
    <>
      <h2 id="project-heading-text" className="project-heading">
        Projects
      </h2>

      <ProjectTopic topic_name="React Projects" projs={project_data.react} />
      <ProjectTopic topic_name="Django Projects" projs={project_data.django} />
    </>
  );
};

const ProjectTopic = (props) => {
  const { topic_name, projs } = props;

  const [projPage, setProjPage] = useState({status:false,id:null});

  const list = projs.map((proj) => {
    return (
      <span key={proj.id} className="card-body zoom">
        <CardComp
          comp_id = {proj.id}
          setProjPage={setProjPage}
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

  if (!projPage.status) {
    return (
      <span>
        <h4>{topic_name}</h4>

        <div>{list}</div>
      </span>
    );
  } else {
    return (
      <ProjTopicContext.Provider value={{ setProjPage, project_data,projPage }}>
        <ProjectPage />
      </ProjTopicContext.Provider>
    );
  }
};

const CardComp = (props) => {
  const { setProjPage,comp_id } = props;

  const handleDetails = (e) => {
    setProjPage({status:true,id:comp_id});
    // console.log(e);
    // console.log(comp_id);
  };
  const detailsCardRef = useRef();
  return (
    <Card ref={detailsCardRef} sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 165 }} image={props.img} title={props.name} />
      <CardContent>
        <Typography id="name" gutterBottom variant="h5" component="div">
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
        {/* <Button size="small" onClick={handleDetails}>
          Details
        </Button> */}
      </CardActions>
    </Card>
  );
};

export default Projects;
