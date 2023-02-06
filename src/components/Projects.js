import { projects } from "../data/projects";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    
    const displayProjects = projects.map((project) => {
        const {title, logo, description, repoLink, url, demoVideo, embedId, technologies} = project
        return <ProjectCard title={title} logo={logo} description={description} repoLink={repoLink} url={url} demoVideo={demoVideo} embedId={embedId} technologies={technologies}/>
    })
    
    return (
        <ProjectsContainer>
        <h2>
            Projects:
        </h2>
        <CardContainer>
            {displayProjects}
        </CardContainer>
    </ProjectsContainer>

    )
}

export default Projects

const ProjectsContainer = styled.div`
border: 2px solid green;
height: fit-content;
width: 100vw;
padding-bottom: 30px;
`

const CardContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
`