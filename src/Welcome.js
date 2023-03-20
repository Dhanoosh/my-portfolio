import dpImage from './images/dp.png';

const Welcome = () => {
    return(
            <div className="welcome-container">
                <div className="welcome-image-container">
                    <img src={dpImage} alt="Download CV" className="welcome-image" />
                </div>
                <div className="welcome-text-container">
                    <p className="welcome-text">Hello There! This is my digital canvas, where I paint a picture of my talents, skills, and projects.</p>
                    <a href='https://drive.google.com/file/d/1yZWabCfpcbeoK1ij146dCZAsR3YGJ4rj/view?usp=share_link' download target="_blank" rel="noreferrer">
                        <button className="welcome-button">DOWNLOAD CV</button>
                    </a>
                </div>
            </div>
    )
}

export default Welcome
