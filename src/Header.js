import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const Header = () => {
    return(
        <header>
            <h1>Dhanush Thirunavukkarasu</h1>
            <p className = "developer">Full Stack Developer </p>
                <div className="header-icons">
                    <a href = "https://www.linkedin.com/in/dhanush-thirunavukkarasu/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/Dhanoosh" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
        </header>
    )
}

export default Header