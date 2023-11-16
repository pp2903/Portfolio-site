import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions  } from '@mui/material';
import './proj.css'
import { useContext } from 'react';
import { ProjTopicContext }  from './Projects.js'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { project_data } from './proj_data.js';


const ProjectPage = () => {
  
   const value = useContext(ProjTopicContext)

    const setProjPage  = value.setProjPage;
  
  const handleBack= ()=>{
    setProjPage({status:false,id:null})
    

  }
  const proj_id = value.projPage.id;
  
  return (

    <>
    
    <div className="project-page-container">
    
    
    <ProjCard proj_id = {proj_id}  handleBack={handleBack}/>
    
    
    </div>

   
    
    </>
    
  )
}






const ProjCard = (props)=>{
  const {proj_id} = props;
  const proj = project_data.react.filter((obj)=> obj.id===proj_id)
  console.log(proj)
  return (
    <Card sx={{ maxWidth: 1150 }}>
      
      <Button  size="small" onClick={props.handleBack}><ArrowBackIcon color="primary" sx={{fontSize:45}}/></Button>
      <CardMedia
        sx={{ height:400}}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {proj.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {proj.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}











export default ProjectPage