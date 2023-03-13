import Hero from './images/AboutImage.svg';
import DownloadCV from './images/downloadcv.svg';

const About = () => {
  return (
    <section>
      <h2 className='title'>About</h2>
      <div className='about-item'>
        <div className='about-text'>
          <p>
            I am a full-stack developer passionate about creating beautiful, responsive, and intuitive user interfaces. I have a background in Software Development, and I am currently pursuing Master's degree in Computer Science.
          </p>
          <div className="about-download">
            <a href='https://drive.google.com/file/d/1yZWabCfpcbeoK1ij146dCZAsR3YGJ4rj/view?usp=share_link' download target="_blank" rel="noreferrer">
              <img src={DownloadCV} alt='dcv' width="200" height="242"></img>
            </a>
          </div>
        </div>
        <img className='about-img' src={Hero} alt='hero'></img>
      </div>
    </section>
  )
}

export default About
