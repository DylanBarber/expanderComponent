import axios from 'axios';
import GitHubProjectCard from './components/ProjectCard';
import './Projects.css';
import { Component } from 'react';

class GitHubProjects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            repoData: []
        };
    }

    async componentDidMount() {

        const responseData = await axios.get('https://api.github.com/users/dylanbarber/repos');
        this.setState({ repoData: responseData.data });
    }

    render() {

        const projectCards = this.state.repoData.map((repo, index) => {

            if (repo.description === null) {
                repo.description = 'No Description';
            }

            return (
                <GitHubProjectCard
                    key={index}
                    name={repo.name}
                    description={repo.description}
                />)
        });

        return (
            <div className='projectCardContainer'>
                {projectCards}
            </div>
        )

    }
}

export default GitHubProjects;