// import { useState } from "react"
import { links } from "./data";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

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
  return (
    <>
      <Box sx={{ flexGrow: 1, padding: "3rem 0rem" }}>
        <Grid className="top-bar" container spacing={1}>
          <img className="profile-pic" src="./profile.png" alt="profile p" />
          <div className="name-heading">
            <Grid item sx={{ alignSelf: "flex-start" }}>
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontFamily: 'Open Sans, sans-serif',
                  color:'#cccc'
                }}
              >
                Pranshu Priyam
              </Typography>

              <hr />

              <Social />
            </Grid>
          </div>
        </Grid>
      </Box>
    </>
  );
};
export default Profile;
