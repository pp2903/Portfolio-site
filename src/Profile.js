import { links } from "./data";
import { Button, Grid, Typography,ThemeProvider, createTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

//custom theme for buttons
const theme = createTheme({
  overrides: {
    MuiButton: {
      root: {
        paddingTop: 0, // Set padding top to 0
      },
    },
  },
});




const Social = () => {
  const newLinks = links.map((link) => {
    return (
      <SocialButton
        name={link.name}
        url={link.url}
        img={link.img}
        key={link.id}
      />
    );
  });

  return (
    <>
      <div className="social-bar slide-in" id="slider">
        {newLinks}
      </div>
    </>
  );
};

const SocialButton = (props) => {
  const { name, url, img } = props;

  return (
    <>
      <a id="" className="icon-handle" href={url}>
        <img className="zoom" src={img} alt={name} />
      </a>
    </>
  );
};
const Profile = () => {
  const [description, setDescription] = useState("");
  const [showCursor, setShowCursor] = useState(false);
  const cursorAnimationControl = useAnimation();

  useEffect(() => {
    const text = "I'm a fullstack developer with React and Django skills.";
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDescription(
          (prevDescription) => prevDescription + text.charAt(index)
        );
        index++;
      } else {
        clearInterval(typingInterval);
        setShowCursor(true);
        animateCursor();
      }
    }, 100);

    return () => clearInterval(typingInterval); // Cleanup function to clear the interval
  }, []);

  const animateCursor = async () => {
    while (true) {
      await cursorAnimationControl.start({ opacity: 0 });
      await cursorAnimationControl.start({ opacity: 1 });
      await new Promise((resolve) => setTimeout(resolve, 500)); // Add a delay between animation cycles
    }
  };

  const handleDownload = () => {
    // Implement download logic here
    // For example, you can use window.open() to open a download link
    // window.open('/path-to-resume.pdf', '_blank');
  };

  const isMediumScreenOrLess = useMediaQuery((theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <>
      <Box sx={{ flexGrow: 1, padding: "3rem 0rem" }}>
        <Grid className="top-bar" container spacing={1}>
          <img className="profile-pic" src="./profile.png" alt="profile_pic" />
          <div className="name-heading">
            <Grid item sx={{ alignSelf: "flex-start", textAlign: "center" }}>
              <Typography
                variant="h2"
                gutterBottom
                sx={{ fontFamily: "Roboto, sans-serif" }}
              >
                Pranshu Priyam
              </Typography>

              <hr />
              <Social />
            </Grid>
          </div>

          <Grid item xs={12} sx={{ textAlign: "center", marginTop: "2rem" }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* <Typography
                variant={isMediumScreenOrLess ? "body1" : "h5"}
                initial={{ opacity: 0 }} // Initial opacity set to 0
                animate={{ opacity: 1 }} // Animate opacity to 1
                transition={{ duration: 0.5 }} // Transition duration set to 0.5 seconds
              >
                {description}
                {showCursor && (
                  <motion.span
                    animate={cursorAnimationControl}
                    style={{ opacity: 1 }}
                  >
                    |
                  </motion.span>
                )}
              </Typography> */}
            </motion.div>
          </Grid>

          {/* Add the Button here */}
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: isMediumScreenOrLess ? "center" : "flex-start", // Adjusted to 'flex-start' for sizes higher than medium
             
            }}
          >
           
            <Button
              variant="contained"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                transition: "background-color 0.3s ease, transform 0.3s ease",
                margin: "auto", // Center the button horizontally
                marginTop:0,
                display: "block", // Ensure the button takes up full width
              }}
              sx={{
                "&:hover": {
                  backgroundColor: "#222", // Darken the background color on hover
                },
                "&:active": {
                  transform: "scale(0.95)", // Shrink the button slightly on click
                },
                fontSize: isMediumScreenOrLess ? "0.8rem" : "1rem", // Adjust font size based on screen size
                padding: isMediumScreenOrLess ? "8px 16px" : "12px 24px", // Adjust padding based on screen size
              }}
              onClick={handleDownload}
            >
              Download Resume
            </Button>
          
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Profile;
