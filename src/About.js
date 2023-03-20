import Hero from './images/AboutImage.svg';

const About = () => {
  return (
    <section>
      <h2 className='title'>About Me</h2>
      <div className='about-item'>
        <div className='about-text'>
          <p>
          I am a driven and ambitious Computer Science graduate student at Santa Clara University, 
          with a desire to become a full-stack developer. Throughout my academic and professional career, I have cultivated a passion for creating beautiful, and meaningful websites.</p>
         
         <br/><br/>
          <p>When I am not coding, you can find me exploring creative pursuit like painting or photography. 
          I am always eager to learn and continuously seeking out new technologies in my Masters Program</p>
      
        </div>
        <img className='about-img' src={Hero} alt='hero'></img>
      </div>
    </section>
  )
}

export default About
