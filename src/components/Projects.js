import { projects } from "../data/projects";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    
    const displayProjects = projects.map((project) => {
        const {id, title, image, description, repoLink, url, demoVideo, embedId, technologies} = project
        return <ProjectCard key={id} title={title} image={image} description={description} repoLink={repoLink} url={url} demoVideo={demoVideo} embedId={embedId} technologies={technologies}/>
    })
    
    return (
        <ProjectsContainer id="projects">
        <h2>
            My most recent projects:
        </h2>
        <CardContainer>
            {displayProjects}
        </CardContainer>
    </ProjectsContainer>

    )
}

export default Projects

const ProjectsContainer = styled.section`
height: fit-content;
padding-bottom: 30px;
color: #ffbf30;
`

const CardContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
`