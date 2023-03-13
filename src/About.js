import Hero from './images/AboutImage.svg';

const About =()=>{
    return (
        <section>
            <h2 className='title'>About</h2>
            <div className='about-item'>
                <p className='about-text'>
                I am a full-stack developer passionate about creating
                beautiful, responsive, and intuitive user interfaces. I have
                a background in Software Development, and I am
                currently pursuing Master's degree in Computer Science.
                </p>
                <img className='about-img' src={Hero} alt='hero'></img>
            </div>
        </section>
    )
}


export default About