// import { useState } from "react"

const links = [
  {
    name: "github",
    url: "https://github.com/pp2903",
    img: "./icons/github.png",
  },
  {
    name: "leetcode",
    url: "https://leetcode.com/priyampranshu/",
    img: "./icons/leetcode.png",
  },
  {
    name: "linkedIn",
    url: "https://www.linkedin.com/in/pp2903/",
    img: "./icons/linkedIn.png",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/PranshuPriyam",
    img: "./icons/x.png",
  },
];

const Social = () => {
  const newLinks = links.map((link) => {
    return <SocialButton name={link.name} url={link.url} img={link.img} />;
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
      <a id="" className="social-handle" href={url}>
        <img className="zoom" src={img} alt={name} />
      </a>
    </>
  );
};

const Profile = () => {
  return (
    <>
      <div className="top-bar">
        <img className="profile-pic" src="./profile.png" alt="profile p" />
        <div className="name-heading">
          Pranshu Priyam
          <hr />
          <Social />
        </div>
      </div>
    </>
  );
};
export default Profile;
