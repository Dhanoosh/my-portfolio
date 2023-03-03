const Skills = () => {
    const skillsArray = ['Java', 'JavaScript', 'Reactjs', 'AWS', 'SQL', 'HTML/CSS', 'Git', 'Jenkins'];

    const skills = skillsArray.map((skill,index) => {
        return <li className='skill' key={index}>{skill}</li>
    });
    
    return(
        <div className='skills'>
            <h2 className='title'>Skills</h2>
            <div className='skill-holder'>{skills}</div>
        </div>
    )
}

export default Skills