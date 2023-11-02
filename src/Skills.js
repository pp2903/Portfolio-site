
import { skills }from './skills_data'





const Skills = () => {
  
    const skillsList = skills.map((skill)=>{
        return(

            <img src="skill.url" alt="skill.name"></img>
        )
        

    })
  
  
    return (
    <div className="skills-list">
        <h1 className="subheading">Skills</h1>
        
        {skillsList}
        
        
        
    </div>
  )
}



export default Skills