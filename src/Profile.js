
// import { useState } from "react"



const Social  = ()=>{

    return(
        <>
        
        <a className="social-handle" href=""><img src="./icons/github.png" alt="github"/></a>
        <a className="social-handle" href=""><img src="./icons/leetcode.png" alt="leetcode"/></a>
        <a className="social-handle" href=""><img src="./icons/linkedIn.png" alt="LinkedIn"/></a>
        <a className="social-handle" href=""><img src="./icons/x.png" alt="twitter"/></a>
        
        
        </>
    )
}

const Profile = () => {
  
  
    return (

    

    <>
        <div className="top-bar">

        <div className="name-heading">
            Pranshu Priyam
            <hr/>
            <Social/>
        </div>
        <img className="profile-pic" src="./profile.png" alt="profile p"/>   


        </div>
        




    </>
  )
}
export default Profile