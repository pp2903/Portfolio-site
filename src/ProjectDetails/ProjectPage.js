import "./proj.css";
import { useContext,useState } from "react";
import { ProjTopicContext } from "./Projects.js";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Card, CardMedia, CardContent, CardActions, Typography, Button,Grid } from "@mui/material";
import { FaHtml5, FaCss3Alt, FaJsSquare,  FaReact,FaGitAlt } from 'react-icons/fa'; // Import icons from Font Awesome


const ProjectPage = () => {
  const value = useContext(ProjTopicContext);

  const setProjPage = value.setProjPage;

  const handleBack = () => {
    setProjPage(false);
  };

  return (
    <>
      <div className="project-page-container">
        <ProjCard handleBack={handleBack} />
      </div>
    </>
  );
};

const ProjCard = (props) => {
  const value = useContext(ProjTopicContext);
  const proj = value.currProj;
  const [selectedImage, setSelectedImage] = useState(proj.img[0]);

  const handleImageClick = (newImage) => {
    setSelectedImage(newImage);
  };
    return (
      <Card sx={{ maxWidth: 1100, padding: 1, marginBottom: 2 }}>
      <Button size="small" onClick={props.handleBack}>
        <ArrowBackIcon color="primary" sx={{ fontSize: 45 }} />
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <CardMedia
                component="img"
                sx={{
                  height: 400,
                  objectFit: "contain", // Ensures the image fits without cropping
                  width: "100%", // Ensures the image fills the container
                }}
                image={selectedImage}
                title="Main Image"
              />
            </Grid>
            <Grid item container spacing={2} sx={{ paddingTop: 2 }}>
              {proj.img.map((image, index) => (
                <Grid item key={index} xs={4}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: 100,
                      objectFit: "contain", // Ensures the image fits without cropping
                      width: "100%", // Ensures the image fills the container
                      cursor: "pointer",
                      border: selectedImage === image ? '2px solid black' : 'none', // Add border for active image
                      borderRadius: 1, // Optional: Add border radius for aesthetics
                    }}
                    image={image}
                    title={`Image ${index + 1}`}
                    onClick={() => handleImageClick(image)}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <strong>{proj.name}</strong>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {proj.description}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Technologies Used
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FaHtml5 size={30} style={{ marginRight: 10 }} /> {/* HTML5 icon */}
              <FaCss3Alt size={30} style={{ marginRight: 10 }} /> {/* CSS3 icon */}
              <FaJsSquare size={30} style={{ marginRight: 10 }} /> {/* JavaScript icon */}
              <FaReact size={30} style={{ marginRight: 10 }} /> {/* React icon */}
              <FaGitAlt size={30} style={{ marginRight: 10 }} /> {/* Git icon */}
              {/* Add more icons as needed */}
            </div>
          </CardContent>
          <CardActions>
            <Button size="small">Visit</Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProjectPage;
