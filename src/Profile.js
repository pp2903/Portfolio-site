// import { useState } from "react"
import { links } from './data'
import { Typography } from "@mui/material"


const Social = () => {
  const newLinks = links.map((link) => {
    return <SocialButton name={link.name} url={link.url} img={link.img} key={link.id} />;
  });
  
  return (
    <>
      <div className="social-bar slide-in" id="slider">{newLinks}</div>
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
      <div className="top-bar">
        <img  className="profile-pic" src="./profile.png" alt="profile p" />
        <div className="name-heading">
        <Typography variant="h2" gutterBottom>
        
          Pranshu Priyam
      </Typography>
          <hr />
          <Social />
        </div>
      </div>
    </>
  );
};
export default Profile;
