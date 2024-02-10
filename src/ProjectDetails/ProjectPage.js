import "./proj.css";
import { useContext, useState } from "react";
import { ProjTopicContext } from "./Projects.js";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaPython,
  FaServer,
} from "react-icons/fa"; // Import icons from Font Awesome
import { SiRedux } from "react-icons/si";

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
                  objectFit: "contain", 
                  width: "100%",
                  "@media (max-width: 600px)": {
                    height: "20%",
                  },
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
                      objectFit: "contain",
                      width: "100%", 
                      cursor: "pointer",
                      border:
                        selectedImage === image ? "2px solid black" : "none",
                      borderRadius: 1,
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
            <div
              className="technologies-icons"
              style={{ display: "flex", alignItems: "center" }}
            >
              {proj.technologies.includes("html") && (
                <FaHtml5 size={30} style={{ marginRight: 10 }} />
              )}
              {proj.technologies.includes("css") && (
                <FaCss3Alt size={30} style={{ marginRight: 10 }} />
              )}
              {proj.technologies.includes("js") && (
                <FaJsSquare size={30} style={{ marginRight: 10 }} />
              )}
              {proj.technologies.includes("react") && (
                <FaReact size={30} style={{ marginRight: 10 }} />
              )}
              {proj.technologies.includes("python") && (
                <FaPython size={30} style={{ marginRight: 10 }} />
              )}
              {proj.technologies.includes("git") && (
                <FaGitAlt size={30} style={{ marginRight: 10 }} />
              )}
              {proj.technologies.includes("redux") && (
                <SiRedux size={30} style={{ marginRight: 10 }} />
              )}
              {proj.technologies.includes("nginx") && (
                <FaServer size={30} style={{ marginRight: 10 }} />
              )}

              {/* Git icon */}
              {/* Add more icons as needed */}
            </div>
          </CardContent>
          <CardActions>
            <Button href={proj.link} size="small">Visit</Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProjectPage;
