import cinema from './images/cinema.svg';
import todo from './images/todo.svg';

const Project = () => {
    const projectArr = [
        {
            title: "My ToDo List",
            img : todo,
            demoLink: "https://todo-list-d1af4.web.app",
            githubLink: "https://github.com/Dhanoosh/todo-app"
        },
        {
            title: "Cinema Booking Website",
            img : cinema,
            demoLink: "",
            githubLink: ""
        }
    ]

    return (
        <div>
            <h2 className="title">Projects</h2>
            <div className="project-holder">
                {
                    projectArr.map((project, index) =>{
                        return (
                            <div className="project">
                                <img
                                className = "project-img"
                                src = {project.img}
                                alt = {project.title}
                                />
                                <h4 className="project-title">{project.title}</h4>
                                <div className="links" style={{margin:"2rem"}}>
                                    <a className="project-link" href={project.demoLink} target="_blank" rel="noreferrer">
                                        LIVE DEMO
                                    </a>
                                    <a className="project-link" href={project.githubLink} target="_blank" rel="noreferrer">
                                        CODE
                                    </a>
                                </div>
                            </div>    
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Project