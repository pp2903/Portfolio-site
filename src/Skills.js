
import { skills }from './data'


const Skill = (props)=>{
    const { url, name} = props
    
    return <>
    
    
        <img className="icon-handle zoom" src={url} alt={name}/>
    
    </>
}


const Skills = () => {
  
    const skillsList = skills.map((skill)=>{
        return(
            <Skill url={skill.url} name={skill.name} />
        )
        

    })
    
    return (
    <div  className="skills-list">
        <h1  className="subheading">Skills
        <hr/></h1>
        
        {skillsList}
        
        
        
    </div>
  )
}



export default Skills