import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';




const project_data = {

  react:[
    {
      name:"Mark's Pizzeria",
      url:"https://github.com/pp2903/Mark-s-Pizzeria/tree/test"
    }

  ],

  django:[
    {
      name:"Django CRM",
      url:"https://github.com/pp2903/DjangoCRM"
    },
    {
      name:"Portfolio site",
      url:"https://github.com/pp2903/Portfolio-site"
    },
  ]


}




const Projects = () => {
  return (
    <>
     <h2 className="project-heading">Projects</h2>







<ProjectTopic name="React"/>
<ProjectTopic name="Django"/>
    <CardComp/>

    
    </>
   

  )
}





const CardComp = (props)=>{
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}


const ProjectTopic = (props)=>{


  const { name }  = props;
  
  return <>

  <h4 >{name} projects</h4>
  </>
  
}

const Project = (props)=>{
    



}

export default Projects