import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions  } from '@mui/material';
import './proj.css'
import { useContext } from 'react';
import { ProjTopicContext }  from './Projects.js'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const ProjectPage = () => {
  
   const value = useContext(ProjTopicContext)

    const setProjPage  = value.setProjPage;
    
  
  const handleBack= ()=>{
    setProjPage(false)
    

  }
  
  
  return (

    <>
    
    <div className="project-page-container">
    
    
    <ProjCard    handleBack={handleBack}/>
    
    
    </div>

   
    
    </>
    
  )
}






const ProjCard = (props)=>{
  const value = useContext(ProjTopicContext)
  const proj = value.currProj;
  
  return (
    <Card sx={{ maxWidth: 1150 }}>
      
      <Button  size="small" onClick={props.handleBack}><ArrowBackIcon color="primary" sx={{fontSize:45}}/></Button>
      <CardMedia
        sx={{ height:400}}
        image={proj.img}
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