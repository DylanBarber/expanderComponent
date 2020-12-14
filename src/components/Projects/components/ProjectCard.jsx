import './ProjectCard.css';

const GitHubProjectCard = props => {

    return (
        <div className="projectCard">
            <h1 className="projectName">{props.name}</h1>
            <p className="projectDescription">{props.description}</p>
        </div>
    );
}

export default GitHubProjectCard;